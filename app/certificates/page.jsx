import { certificates } from '@/data'

export default function CertificatesPage() {
  return (
    <main id="Certs" className="w-full py-20 bg-[conic-gradient(at_top_left,_#fce7f3,_#f3e8ff,_#fde68a,_#fce7f3)]">
        <div className="container mx-auto px-4">
            <h1 className="heading">
                My <span className="text-pink-500">Certificates</span>
            </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg border border-pink-200 overflow-hidden hover:shadow-pink-200/50 transition-shadow duration-300 cursor-pointer"
          >
            {cert.preview && (
                <img
                    src={cert.preview}
                    alt={`${cert.title} preview`}
                    className="w-full h-50"
                />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-1">{cert.title}</h2>
              <p className="text-sm text-gray-500">{cert.issuer}</p>
              <p className="text-sm text-gray-400 mt-2">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </main>
  );
}
