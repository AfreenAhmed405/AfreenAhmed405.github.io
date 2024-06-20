export const navItems = [
    { name: "About", link: "#about" },
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
      title: "Currently learning about LLMs and Generative AI",
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
      title: "FinTrack - Finance Dashboard App",
      des: "Track your company's finances with FinTrack. Monitor expenses, revenue, and more with this all-in-one dashboard app.",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
      link: "https://github.com/Prajapdh/Finance-Dashboard",
      liveLink: "",
    },
    {
      id: 2,
      title: "NodeAuthHub - Comprehensive User Authentication and Session Management ",
      des: "An Express.js backend application designed for robust user authentication, session management, and product information handling.",
      iconLists: ["/nodejs.svg", "/expressjs.svg", "/mongo.svg", "/passportjs.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
      liveLink: "",
    },
    {
      id: 3,
      title: "Monkey Finder - Find Nearby Monkeys",
      des: "A .NET MAUI app that uses geolocation to find monkeys near you. Built with .NET MAUI, and Blazor",
      iconLists: ["/dotnetcore.svg", "/xamarin.svg", '/blazor.svg'],
      link: "https://github.com/Prajapdh/MonkeyFinder",
      liveLink: "",
    },
    {
      id: 4,
      title: "React Job Portal - Dynamic and Responsive Job Listing Platform",
      des: "The React Job Portal allows users to view, add, and edit job listings. It features a responsive design with TailwindCSS, state management using Redux, and backend data handling through a JSON server.",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
      link: "https://github.com/Prajapdh/ReactJobPortal",
      liveLink: "",
    },
  ];
  
  // export const workExperience = [
  //   {
  //     id: 1,
  //     title: "Frontend Engineer Intern",
  //     desc: "Developed a cross-platform mobile application using .NET MAUI and Blazor, enhancing user experience across multiple OS platforms. Led the integration of services and UI components with Bootstrap, GraphQL, and Strapi CMS, boosting dynamic content management and real-time updates.",
  //     className: "md:col-span-2",
  //     thumbnail: "/exp1.svg",
  //   },
  //   {
  //     id: 2,
  //     title: "Mobile App Dev - JSM Tech",
  //     desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //     className: "md:col-span-2", // change to md:col-span-2
  //     thumbnail: "/exp2.svg",
  //   },
  //   {
  //     id: 3,
  //     title: "Freelance App Dev Project",
  //     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //     className: "md:col-span-2", // change to md:col-span-2
  //     thumbnail: "/exp3.svg",
  //   },
  //   {
  //     id: 4,
  //     title: "Lead Frontend Developer",
  //     desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //     className: "md:col-span-2",
  //     thumbnail: "/exp4.svg",
  //   },
  // ];

export const workExperience = [
    {
      id:1,
      title: "Schneider Electric",
      subtitle: "Systems Engineer Intern",
      description:
        "Modernized an MVC project from .NET4 to .NET 7, enhancing efficiency and scalability. Optimized database interactions and refactored code using Entity Framework and LINQ, and enhanced UI with TailwindCSS and jQuery. Additionally, streamlined operations by designing VBA macros and managed the migration of Tableau dashboards to cloud solutions.",
      link: "https://www.se.com/ww/en/",
    },
    {
      id:2,
      title: "Cincinnati Children's Hospital",
      subtitle: "Software Engineer Intern",
      description:
        "Developed a cross-platform mobile application using .NET MAUI and Blazor, enhancing user experience across multiple OS platforms. Led the integration of services and UI components with Bootstrap, GraphQL, and Strapi CMS, boosting dynamic content management and real-time updates.",
      link: "https://www.cincinnatichildrens.org/",
    },
    {
      id:3,
      title: "Learning Commons",
      subtitle: "Content Peer Tutor",
      description:
        "Provided tailored academic support to over 200 students, improving their understanding in Physics and Math through personalized sessions and active learning activities. Conducted weekly review sessions that fostered a collaborative learning environment.",
      link: "https://www.uc.edu/campus-life/learning-commons.html",
    },
  ];