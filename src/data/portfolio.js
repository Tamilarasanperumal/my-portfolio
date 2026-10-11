
export const profile = {
    name: "Tamilarasan Perumal",
    role: "React & React Native Developer",
    tagline:
        "I build modern, fast and scalable web and mobile applications.",
    email: "perumaltamilarasan08111994@gmail.com",
    location: "Tamil Nadu, India",
    github: "https://github.com/tamilarasanperumal",
    linkedin: "https://www.linkedin.com/Tamilarasanperumal",
    resume: "/TamilarasanPerumal_UpdateResume.pdf",
    phone: "+919894429960",
    whatsapp: "+918682825879",
};

export const skills = [
    { name: "React JS", icon: "⚛️", level: 90 },
    { name: "React Native", icon: "📱", level: 80 },
    { name: "JavaScript", icon: "🟨", level: 90 },
    { name: "Node.js", icon: "🟢", level: 82 },
    { name: "Tailwind CSS", icon: "🎨", level: 80 },
    { name: "Material UI", icon: "🧩", level: 70 },
    { name: "MySQL", icon: "🗄️", level: 82 },
    { name: "PostgreSQL", icon: "🐘", level: 75 },
    { name: "RTK Query", icon: "⚡", level: 82 },
    { name: "Prisma", icon: "🔷", level: 80 },
];

export const skillCategories = [
    {
        title: "Frontend",
        description: "Building responsive and modern web and mobile interfaces.",
        skills: [
            {
                name: "React.js",
                level: 92,
                icon: "⚛️",
            },
            {
                name: "React Native",
                level: 88,
                icon: "📱",
            },
            {
                name: "JavaScript",
                level: 90,
                icon: "🟨",
            },
            {
                name: "HTML5",
                level: 90,
                icon: "🌐",
            },
            {
                name: "CSS3",
                level: 88,
                icon: "🎨",
            },
            {
                name: "Tailwind CSS",
                level: 88,
                icon: "💨",
            },
            {
                name: "Material UI",
                level: 90,
                icon: "🎨",
            },
        ],
    },

    {
        title: "Backend",
        description: "Developing APIs, business logic, and database-driven applications.",
        skills: [
            {
                name: "Node.js",
                level: 82,
                icon: "🟢",
            },
            {
                name: "Express.js",
                level: 80,
                icon: "🚀",
            },
            {
                name: "REST API",
                level: 88,
                icon: "🔗",
            },
            {
                name: "MySQL",
                level: 82,
                icon: "🗄️",
            },
            {
                name: "Prisma",
                level: 78,
                icon: "🔷",
            },
        ],
    },

    {
        title: "Libraries & Developer Tools",
        description: "Libraries and tools I use to build, manage, test, and ship applications.",
        skills: [
            {
                name: "Redux Toolkit",
                level: 88,
                icon: "🔄",
            },
            {
                name: "RTK Query",
                level: 85,
                icon: "⚡",
            },
            {
                name: "Git",
                level: 88,
                icon: "🔀",
            },
            {
                name: "GitHub",
                level: 88,
                icon: "🐙",
            },
            {
                name: "Postman",
                level: 85,
                icon: "📮",
            },
            {
                name: "Framer Motion",
                level: 80,
                icon: "✨",
            },
        ],
    },

    {
        title: "AI Tools",
        description: "AI-powered tools I use for development, debugging, research, and productivity.",
        skills: [
            {
                name: "ChatGPT",
                level: 90,
                icon: "🤖",
            },
            {
                name: "Claude",
                level: 85,
                icon: "🧠",
            },
            {
                name: "Google Gemini",
                level: 85,
                icon: "✨",
            },
            {
                name: "GitHub Copilot",
                level: 88,
                icon: "🤖",
            },
        ],
    },
];





export const projects = [
    {
        title: "YourFarm Mobile App",
        category: "Mobile Application",
        type: "React Native",

        description:
            "A livestock and animal healthcare mobile platform that helps farmers access veterinary support, animal disease diagnosis, herbal treatment solutions, veterinary appointments, farming resources, and an online marketplace for livestock and farm-related products.",

        tags: [
            "React Native",
            "JavaScript",
            "REST API",
            "Android",
        ],

        image: "/images/projects/yourfarm-mobile.jpg",

        video: "/videos/yourfarm-mobile.mp4",

        accent:
            "from-green-500 via-emerald-600 to-teal-800",

        url:
            "https://play.google.com/store/apps/details?id=com.yourfarm",

        isMobile: true,
    },

    {
        title: "YourFarm Web",
        category: "Web Application",
        type: "React.js",

        description:
            "A web-based management platform for the YourFarm ecosystem, supporting business operations, user management, dairy management, order processing, product management, addresses, shipping, and other administrative workflows through API-driven interfaces.",

        tags: [
            "React.js",
            "Material UI",
            "REST API",
            "Responsive UI",
        ],

        image: "/images/projects/yourfarm-web.jpg",

        video: "/videos/yourfarm-web.mp4",

        accent:
            "from-blue-500 via-indigo-600 to-violet-800",

        url: "https://webadmin.yourfarm.co.in/dashboard",

        isMobile: false,
    },

    {
        title: "Universal Associates",
        category: "Web Application",
        type: "React.js",

        description:
            "A responsive corporate website developed for a construction company to showcase its services, projects, company information, and business presence with a modern and mobile-friendly user experience.",

        tags: [
            "React.js",
            "Tailwind CSS",
            "JavaScript",
            "RTK",
            "Prisma",
            "MySQL",
        ],

        image:
            "/images/projects/universal-associates.jpg",

        video:
            "/videos/universal-associates.mp4",

        accent:
            "from-orange-500 via-red-600 to-rose-800",

        url:
            "https://universalassociates.pinnaclesystems.co.in/",

        isMobile: false,
    },

    {
        title: "YourFarm Website",
        category: "Ecommerce Website",
        type: "React.js",

        description:
            "An ecommerce and livestock-focused web platform where users can explore animal healthcare information, veterinary services, herbal products, farming resources, marketplace products, blogs, and educational farming content.",

        tags: [
            "React.js",
            "Material UI",
            "REST API",
            "Responsive UI",
        ],

        image: "/images/projects/website.jpg",

        video: "/videos/yourfarm-web.mp4",

        accent:
            "from-blue-500 via-indigo-600 to-violet-800",

        url: "https://yourfarm.co.in/",

        isMobile: false,
    },

    {
        title: "Intro Knits",
        category: "Web Application",
        type: "React.js",

        description:
            "A business-focused web application developed for a textile industry workflow, providing a structured interface for managing business information and operational processes with responsive and reusable React components.",

        tags: [
            "React.js",
            "Tailwind CSS",
            "JavaScript",
            "RTK",
            "Prisma",
            "MySQL",
        ],

        image: "/images/projects/iknits.jpg",

        video: "/videos/yourfarm-web.mp4",

        accent:
            "from-blue-500 via-indigo-600 to-violet-800",

        url: "https://iknits.pinnaclesystems.co.in/",

        isMobile: false,
    },

    {
        title: "Ticketing System",
        category: "Web Application",
        type: "React.js",

        description:
            "A web-based ticket management application designed to organize support requests and service issues, helping teams track, manage, and monitor tickets through a centralized workflow.",

        tags: [
            "React.js",
            "Tailwind CSS",
            "JavaScript",
            "RTK",
            "Prisma",
            "MySQL",
        ],

        image: "/images/projects/ticketing.jpg",

        video: "/videos/yourfarm-web.mp4",

        accent:
            "from-blue-500 via-indigo-600 to-violet-800",

        url: "https://ticketingsystem.pinnaclesystems.co.in/",

        isMobile: false,
    },
];


export const experience = [
    {
        period: "2025 — Present",
        title: "React / React Native Developer",
        text:
            "Building responsive web applications and cross-platform mobile experiences.",
    },
    {
        period: "2023 — 2025",
        title: "Full Stack Developer",
        text:
            "Worked on reusable UI components, API integrations and production web applications.",
    },
];


