export const navItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#tech-stack" },
    { name: "Experience", link: "#Experience" },
    { name: "Education", link: "#Education" },
    { name: "Projects", link: "#projects" }
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Actively seeking opportunities to innovate and excel in a dynamic tech environment",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 border border-gray-400 lg:mb-7",
      imgClassName: "w-full",
      titleClassName: "justify-end",
      img: "/heroimg.jpg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Currently pursuing a masters in computer science",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2 border border-gray-400",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 6,
      title: "Skilled full-stack software engineer",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1 border border-gray-400",
      imgClassName: "",
      titleClassName: "md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    }
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Hybrid Self RAG",
      des: "Hybrid Self-RAG is a novel framework that combines self-reflection, external knowledge validation, and fallback dense retrieval to reduce hallucinations and improve factual accuracy in LLM outputs",
      iconLists: ["/python.svg", "/hf-logo.svg"],
      link: "https://github.com/AfreenAhmed405/Hybrid-SelfRAG",
      preview: "/p1_preview.png",
      liveLink: "https://github.com/AfreenAhmed405/Hybrid-SelfRAG"
    },
    {
      id: 2,
      title: "Report Genie",
      des: "Report Genie is a Flask-based web application that allows users to upload medical reports, automatically extract test values, and generate patient-friendly descriptions using RAG powered by LLMs and PubMed",
      iconLists: ["/python.svg", "/html.svg", "/css.svg"],
      link: "https://github.com/AfreenAhmed405/Report-Genie",
      preview: "/p2_preview.png",
      liveLink: "https://github.com/AfreenAhmed405/Report-Genie"
    },
    {
      id: 3,
      title: "Multimodal Nutrition Intake Estimation",
      des: "A deep learning model that estimates calorie intake by integrating continuous glucose monitoring (CGM) data, meal photographs, and participant demographic information",
      iconLists: ["/python.svg", "/Jupyter.svg"],
      link: "https://github.com/AfreenAhmed405/Multimodal-Nutrition-Intake-Estimation",
      preview: "/p3_preview.png",
      liveLink: "https://github.com/AfreenAhmed405/Multimodal-Nutrition-Intake-Estimation",
    },
    {
      id: 4,
      title: "Vet Report Insight",
      des: "This project extracts specific veterinary biomarker values and detailed text from PDF medical reports using a local LLM API",
      iconLists: ["/python.svg"],
      link: "https://github.com/AfreenAhmed405/Vet-Report-Insight",
      preview: "/p4_preview.png",
      liveLink: "https://github.com/AfreenAhmed405/Vet-Report-Insight"
    },
    {
      id: 5,
      title: "Task Management App",
      des: "A task management app inspired by Trello, built using React.js, Spring Boot and PostgreSQL and hosted on various AWS services",
      iconLists: ["/re.svg", "/css.svg", "/sb.svg", "/postgresql.svg", "/aws.svg"],
      link: "https://github.com/AfreenAhmed405/Trello-clone",
      preview: "/p5_preview.png",
      liveLink: "https://github.com/AfreenAhmed405/Trello-clone",
    },
    {
      id: 6,
      title: "Lambda Geospatial Processing API",
      des: "This AWS Lambda function processes geospatial data files (Shapefiles, GeoTIFFs, and PNG previews) for a given area defined by a GeoJSON clip",
      iconLists: ["/re.svg", "/dock.svg", "/aws.svg"],
      link: "https://github.com/AfreenAhmed405/geo-lambda",
      preview: "/p6_preview.png",
      liveLink: "https://github.com/AfreenAhmed405/geo-lambda"
    }  
  ];

export const workExperience = [
  {
    title: "Software Engineer Intern",
    subtitle: "InfraFrame - TTI",
    link: "#",
    description:
      "Built scalable core infrastructure and full-stack web app for an early-stage pavement analysis startup, integrating ML-driven dataset generation and AWS-based deployment pipelines.",
    duration: "May 2025 - Aug 2025",
    type: "Internship",
    responsibilities: [
      "Developed full-stack web application using React and Java Spring Boot on AWS, accelerating product delivery for a startup client",
      "Architected event-driven backend with RabbitMQ, supporting 10K+ concurrent users",
      "Generated and validated synthetic datasets using Stable Diffusion and ResNet models, improving data realism",
      "Containerized and deployed microservices using Docker, ECS, and Lambda, reducing deployment time by 30%"
    ],
    technologies: ["React", "Spring Boot", "AWS", "RabbitMQ", "Docker", "ECS", "Lambda", "Stable Diffusion", "ResNet"]
  },
  {
    title: "Software Engineer",
    subtitle: "JP Morgan Chase & Co.",
    link: "#",
    description:
      "Contributed to multiple trading and data platforms, driving modernization efforts, cloud migration, and release management across 42 distributed systems.",
    duration: "Jul 2022 - Aug 2024",
    type: "Full-time",
    responsibilities: [
      "Enhanced internal accrual-calculation web apps with Java, Spring Boot, React, and Oracle SQL, improving reliability and accuracy",
      "Developed Spark SQL data pipelines, optimizing data delivery and reducing processing latency",
      "Led migration of legacy monolith to AWS microservices (EC2, S3, RDS, IAM), improving scalability and cost efficiency",
      "Oversaw release management and production support, improving delivery timelines by 25% and receiving Recognition Scroll Award"
    ],
    technologies: ["Java", "Spring Boot", "React", "Oracle SQL", "Spark SQL", "AWS", "EC2", "S3", "RDS", "IAM"]
  },
  {
    title: "Software Engineer Intern",
    subtitle: "JP Morgan Chase & Co.",
    link: "#",
    description:
      "Built automation tools to streamline release management and improve system security for internal applications.",
    duration: "Jan 2022 - Jul 2022",
    type: "Internship",
    responsibilities: [
      "Developed self-service automation tool using ReactJS, Java, and Spring Boot, cutting manual release tasks by 90%",
      "Performed vulnerability scans and remediation for 40+ services to strengthen security posture"
    ],
    technologies: ["ReactJS", "Java", "Spring Boot"]
  },
  {
    title: "Software Engineer Intern",
    subtitle: "Hewlett Packard Enterprise",
    link: "#",
    description:
      "Designed automated security testing tools and coordinated student-focused tech initiatives.",
    duration: "May 2021 - Jul 2021",
    type: "Internship",
    responsibilities: [
      "Automated XSS vulnerability scanner tool using Python and XSSer for internal demo environments",
      "Led student technology outreach program improving accessibility and hands-on learning"
    ],
    technologies: ["Python", "XSSer"]
  }
  ];

export const education = [
  {
    title: "Texas A&M University - College Station",
    subtitle: "Master of Computer Science",
    duration: "Aug 2024 - May 2026",
    gpa: "3.7/4.0",
    courses: [
      "Machine Learning", "Artificial Intelligence", "Natural Language Processing", "Network Security", "Information Storage & Retrieval", "OS", "Intelligent UI"
    ],
    awards: "Graduate Student Assistant"
  },
  {
    title: "Vellore Institute of Technology",
    subtitle: "Bachelor of Technology in Electronics and Communication Engineering",
    duration: "Aug 2018 - May 2022",
    gpa: "9.4/10.0",
    courses: [
      "Web Developement", "Data Structures & Algorithms", "OOP", "Cloud Computing", "Machine Learning"
    ],
    awards: "Dean's List | Program Representative | Merit Scholarship Awardee 2018 - 2021 (top 5)"
  }
]

export const certificates = [
    {
      title: "Accessibility for Web Design",
      issuer: "LinkedIn",
      date: "Oct 2024",
      preview: "/acc.jpeg",
    },
    {
      title: "AWS Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "Aug 2024",
      preview: "/aws-saa.jpeg",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "May 2023",
      preview: "/aws-cp.jpeg",
    },
    {
      title: "SepaThon - Hackathon Winner",
      issuer: "JP Morgan Chase & Co.",
      date: "Nov 2022",
      preview: "/cfg.jpg",
    },
    {
      title: "Internet of Things Community Chairperson",
      issuer: "Vellore Institute of Technology",
      date: "Dec 2021",
      preview: "/iotc.jpeg",
    },
    {
      title: "Code for Good - Hackathon Winner",
      issuer: "JP Morgan Chase & Co.",
      date: "May 2021",
      preview: "/sep.jpg",
    },
    {
      title: "Programme Representative ECE",
      issuer: "Vellore Institute of Technology",
      date: "May 2021",
      preview: "/pr.jpeg",
    },
    {
      title: "Merit Scholarship Awardee",
      issuer: "Vellore Institute of Technology",
      date: "May 2021",
      preview: "/m20.jpeg",
    },
    {
      title: "Merit Scholarship Awardee",
      issuer: "Vellore Institute of Technology",
      date: "May 2020",
      preview: "/m19.jpeg",
    },
  ];

export const papers = [
    {
      title: "Autonomous Space Debris Collision Avoidance System",
      description: "A major contributor to the setback of space exploration is the risk of space debris and their collisions with satellites. This paper will cover the methods proposed to produce a space collision avoidance system to automatically maneuver a satellite in a trajectory of collision and to deorbit a satellite safely when it is about to run out of fuel. The space collision avoidance system propounded predicts the path of debris and active satellites by a trained machine learning algorithm. Using the data obtained, it predicts the probability of impact between objects using a collision prediction algorithm developed. Upon reaching a specific threshold value, this would trigger the maneuvering of the satellite into a safe path away from the approaching debris, thus resolving the concerns regarding the deorbiting of dying satellites in low earth orbits, and satellite collisions.",
      conference: "International Conference on Automation, Signal Processing, Instrumentation and Control (i-CASIC 2020) - India",
      publicationDate: "March 2021",
      doi: "10.1007/978-981-15-8221-9_232",
      link: "https://www.researchgate.net/publication/349813122_Autonomous_Space_Debris_Collision_Avoidance_System",
      citations: 2,
      tags: ["Space", "Autonomous Systems", "Collision Avoidance", "Polynomial Regression"],
    },
    {
      title: "Prediction and Classification of Traffic Data with KNN and RFR for a Smart Internet of Vehicles System",
      description: "This paper explores machine learning models, K-nearest neighbours (KNN) and Random Forest Regressor (RFR) to predict traffic in a unique way for an Internet of Vehicles ecosystem. The high accuracy of the proposed model and the ability to factor in more features like weather, gives our model great flexibility. Further, the integration of two powerful machine learning models enables this method of prediction to be faster, but at the same time more reliable than the existing models. All processes which involve data storage, prediction and computation takes place in dedicated cloud servers. The predicted data is then utilized to formulate the fastest route between all pairs of locations, factoring in the traffic conditions predicted above. This enables the formation of an IoV ecosystem.",
      conference: "4th Smart Cities Symposium (SCS 2021) - Bahrain",
      publicationDate: "May 2022",
      doi: "10.1049/icp.2022.0330",
      link: "https://ieeexplore.ieee.org/document/9770751",
      citations: 2,
      tags: ["K-Nearest Neighbours", "Random Forest Regressor", "Floyd Warshall", "Internet of Vehicles", "Support Vector Machine", "Naïve Bayes", "Djiktra's algorithm"],
    },
  ];