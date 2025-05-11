export const navItems = [
    { name: "About", link: "#about" },
    { name: "Tech Stack", link: "#tech-stack" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#Experience" },
    { name: "Contact", link: "#Contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Actively seeking opportunities to innovate and excel in a dynamic tech environment",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Passionate about understanding the transformative power of LLMs and Generative AI",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
        {
      id: 1,
      title: "ChatPDF - Chat with your PDFs",
      des: "An AI-powered application that allows users to interact with PDF documents through a chat interface.",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
      link: "https://github.com/Prajapdh/chat-with-pdf",
      liveLink: "https://chat-with-pdf-liart.vercel.app/",
    },
    {
      id: 2,
      title: "InterviewFlow - Video Interview Platform",
      des: "A real-time video interview platform with screen sharing, live coding assessments, and automated recordings to eliminate scheduling conflicts.",
      iconLists: ["/nodejs.svg", "/expressjs.svg", "/mongo.svg", "/passportjs.svg"],
      link: "https://github.com/Prajapdh/interviewflow",
      liveLink: "https://interviewflow.vercel.app/",
    },
    {
      id: 3,
      title: "Toronto Cupcakes Website Redesign",
      des: "A redesign of the Toronto Cupcakes website using Svelte.js.",
      iconLists: ["/nodejs.svg", "/expressjs.svg", "/mongo.svg", "/passportjs.svg"],
      link: "https://github.com/Prajapdh/TorontoCupcakesRedesign",
      liveLink: "https://toronto-cupcakes-redesign.vercel.app/",
    },
    {
      id: 5,
      title: "ShinobiFetch - Naruto Fandom Scrapper",
      des: "A Node.js scraper that fetches and stores Naruto anime data (characters, clans, jutsu, and episodes) in MongoDB.",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
      link: "https://github.com/Prajapdh/ShinobiFetch",
      liveLink: "",
    },
    {
      id: 4,
      title: "FinTrack - Finance Dashboard App",
      des: "Track your company's finances with FinTrack. Monitor expenses, revenue, and more with this all-in-one dashboard app.",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
      link: "https://github.com/Prajapdh/Finance-Dashboard",
      liveLink: "",
    },
    {
      id: 6,
      title: "Monkey Finder - Find Nearby Monkeys",
      des: "A .NET MAUI app that uses geolocation to find monkeys near you. Built with .NET MAUI, and Blazor",
      iconLists: ["/dotnetcore.svg", "/xamarin.svg", '/blazor.svg'],
      link: "https://github.com/Prajapdh/MonkeyFinder",
      liveLink: "",
    },
    
    
  ];

export const workExperience = [
  {
    title: "Software Engineering Intern",
    subtitle: "Cincinnati Children's Hospital",
    description:
      "Worked across two agile teams (Caren and Acushift), contributing to the development and refactoring of reusable components in Blazor and React, improving frontend efficiency and user experience. Boosted test coverage and reduced development overhead through strategic architecture decisions.",
    link: "#", // Optional: You can replace this with a blog/project link if you want
    duration: "Aug 2023 – Aug 2024",
    type: "Internship",
    responsibilities: [
      "Developed cross-platform mobile app using .NET MAUI and Blazor, reducing dev time by 25%",
      "Refactored 50+ reusable components using Material UI and GraphQL",
      "Increased unit test coverage by 40% using bUnit for robust testing",
      "Contributed to both Caren and Acushift teams, delivering ahead of deadlines"
    ],
    technologies: ["Blazor", ".NET MAUI", "React", "GraphQL", "TypeScript", "Strapi", "bUnit"]
  },
  {
    title: "Systems Engineering Intern",
    subtitle: "Schneider Electric",
    description:
      "Modernized legacy applications and built an internal tool for managing employee data across Ohio state branches. Improved codebase performance and accessibility while streamlining key operations with automation and cloud migration.",
    link: "#",
    duration: "Jan 2023 – May 2023",
    type: "Internship",
    responsibilities: [
      "Migrated MVC project from .NET 4 to .NET 7 Core for better performance",
      "Launched internal tool used across Ohio branches for employee data",
      "Refactored database access with Entity Framework and LINQ",
      "Automated label sorting using VBA macros, saving 50% processing time"
    ],
    technologies: [".NET", "C#", "MVC", "Entity Framework", "LINQ", "VBA", "SQL", "Tableau"]
  },
  {
    title: "Data Engineering Intern",
    subtitle: "Future Wellness Group",
    description:
      "Worked on large-scale healthcare datasets to improve the accuracy of predictive models for chronic illness. Designed data processing pipelines and statistical reports, enabling actionable insights into patient trends.",
    link: "#",
    duration: "May 2022 – Aug 2022",
    type: "Internship",
    responsibilities: [
      "Preprocessed and engineered features for over 500,000 patient records",
      "Built ML pipelines to support chronic disease prediction models",
      "Performed statistical analyses on demographic healthcare data",
      "Enhanced model performance and reliability with optimized datasets"
    ],
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter Lab", "SQL", "AWS", "Docker", "Airflow", "Kubernetes", "Airflow", "Kubernetes"]
  }
  ];