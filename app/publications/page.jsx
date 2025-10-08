import { papers } from '@/data'

export default function PublicationsPage() {

  return (
    <main id="papers" className="w-full py-20 bg-[conic-gradient(at_top_left,_#fce7f3,_#f3e8ff,_#fde68a,_#fce7f3)]">
      <div className="container mx-auto px-4">
          <h1 className="heading">
            My <span className="text-pink-500">Publications</span>
          </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mt-10">
        {papers.map((paper, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg border border-pink-200 overflow-hidden hover:shadow-pink-200/50 transition-shadow duration-300 cursor-pointer p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{paper.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{paper.description}</p>
              
              <p className="text-sm text-gray-500"><strong>Conference/Book:</strong> {paper.conference}</p>
              <p className="text-sm text-gray-500"><strong>Publication Date:</strong> {paper.publicationDate}</p>
              <p className="text-sm text-gray-500"><strong>DOI:</strong> <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="text-pink-500 underline">{paper.doi}</a></p>
              <p className="text-sm text-gray-500"><strong>Citations:</strong> {paper.citations}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {paper.tags.map((tag, i) => (
                  <span key={i} className="text-sm py-1 px-3 bg-pink-100 text-pink-700 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-pink-200 text-black rounded-lg hover:bg-pink-300 transition-colors duration-200 font-medium"
              >
                Read Paper
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
}
