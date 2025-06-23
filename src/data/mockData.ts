
export const mockData = {
  profile: {
    name: "UFITINEMA Nickson",
    title: "Software Developer",
    location: "Based in San Francisco, CA",
    avatar: "/profile.webp",
    contact: {
      phone: "(555) 123-4567",
      email: "ethan.carter@example.com",
      github: "github.com/ethan.carter",
      linkedin: "linkedin.com/in/ethan.carter"
    }
  },
  
  about: {
    description: "I'm a software developer with a passion for creating innovative solutions. With a background in computer science and extensive experience in various programming languages and frameworks, I specialize in developing robust and scalable applications. My expertise spans across web development, mobile applications, and cloud computing, allowing me to tackle diverse projects with confidence.",
    skills: [
      "JavaScript", "Python", "React", "Node.js", "AWS", 
      "Docker", "SQL", "NoSQL", "Git", "CI/CD"
    ],
    services: [
      {
        title: "Software Development",
        description: "Building scalable and efficient applications using modern technologies.",
        icon: "code"
      },
      {
        title: "Networking",
        description: "Setting up and managing network infrastructure for optimal performance.",
        icon: "network"
      },
      {
        title: "Database Management",
        description: "Designing and maintaining databases to ensure data integrity and accessibility.",
        icon: "database"
      }
    ]
  },

  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB"],
      featured: true
    },
    {
      id: 2,
      title: "Mobile App for Fitness Tracking",
      description: "A mobile application for tracking fitness activities, including workouts, steps, and calorie intake.",
      image: "/placeholder.svg",
      technologies: ["React Native", "Firebase"],
      featured: true
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "A dashboard for visualizing data from various sources, with interactive charts and graphs.",
      image: "/placeholder.svg",
      technologies: ["D3.js", "Python", "Flask"],
      featured: true
    },
    {
      id: 4,
      title: "Blog Website",
      description: "A responsive blog website with content management system.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      featured: false
    },
    {
      id: 5,
      title: "Task Management App",
      description: "A comprehensive task management application with team collaboration features.",
      technologies: ["Vue.js", "Express.js", "MongoDB"],
      featured: false
    },
    {
      id: 6,
      title: "Personal Finance Tracker",
      description: "An application for tracking personal finances and budget management.",
      technologies: ["React", "Python", "SQLite"],
      featured: false
    }
  ],

  blog: [
    {
      id: 1,
      title: "Mastering Asynchronous JavaScript: A Comprehensive Guide",
      excerpt: "Dive deep into the world of asynchronous JavaScript, covering concepts like callbacks, promises, and async/await. Learn how to handle asynchronous operations effectively and avoid common pitfalls.",
      readTime: "8 min read",
      date: "2024-01-15",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Node.js",
      excerpt: "Discover the power of Node.js for building scalable and high-performance web applications. This post explores key concepts, best practices, and tools for creating robust server-side solutions.",
      readTime: "12 min read",
      date: "2024-01-10",
      featured: true
    },
    {
      id: 3,
      title: "Introduction to React Hooks: A Practical Approach",
      excerpt: "Get started with React Hooks and learn how to manage state and side effects in functional components. This practical guide provides examples and use cases to help you integrate Hooks into your React projects.",
      readTime: "10 min read",
      date: "2024-01-05",
      featured: false
    },
    {
      id: 4,
      title: "Demystifying Data Structures and Algorithms",
      excerpt: "Explore fundamental data structures and algorithms that are essential for every software developer. This post covers common data structures like arrays, linked lists, and trees, along with algorithms for searching, sorting, and graph traversal.",
      readTime: "15 min read",
      date: "2023-12-28",
      featured: false
    },
    {
      id: 5,
      title: "The Future of Web Development: Trends and Technologies",
      excerpt: "Stay ahead of the curve with a look at the latest trends and technologies shaping the future of web development. This post discusses emerging frameworks, tools, and approaches that are transforming the industry.",
      readTime: "9 min read",
      date: "2023-12-20",
      featured: false
    }
  ],

  resume: {
    education: [
      {
        institution: "University of Technology",
        degree: "Master of Science in Computer Science",
        period: "2018 - 2020",
        location: "University of Technology"
      },
      {
        institution: "State University",
        degree: "Bachelor of Science in Software Engineering", 
        period: "2014 - 2018",
        location: "State University"
      }
    ],
    experience: [
      {
        company: "Tech Solutions Inc.",
        position: "Senior Software Engineer",
        period: "2020 - Present",
        description: "Leading development of scalable web applications and mentoring junior developers."
      },
      {
        company: "Innovate Systems",
        position: "Software Engineer Intern",
        period: "Summer 2019",
        description: "Developed features for mobile applications and contributed to backend services."
      }
    ],
    skillCategories: [
      {
        title: "Programming Languages",
        skills: ["Python", "Java", "C++"],
        icon: "code"
      },
      {
        title: "Databases",
        skills: ["MySQL", "PostgreSQL", "MongoDB"],
        icon: "database"
      },
      {
        title: "Backend Development",
        skills: ["Node.js", "Express.js"],
        icon: "server"
      },
      {
        title: "Cloud Computing",
        skills: ["AWS", "Azure", "GCP"],
        icon: "cloud"
      },
      {
        title: "Version Control",
        skills: ["Git", "GitHub"],
        icon: "git"
      }
    ],
    languages: [
      { name: "English", level: "Native" },
      { name: "Spanish", level: "Fluent" }
    ],
    interests: ["Hiking", "Photography", "Reading"]
  }
};
