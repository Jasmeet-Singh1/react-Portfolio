const navLinks = [
  {
    name: 'Work',
    link: '#work',
  },
  {
    name: 'Projects',
    link: '#experience',
  },
  {
    name: 'Social Links',
    link: '#Footer',
  },
];

const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
];

const counterItems = [
  { prefix: '', value: 3.82, suffix: '', label: 'CGPA' },
  { prefix: '', value: 5, suffix: 'x', label: "Dean's Honour Roll" },
  { prefix: '', value: 3, suffix: '+', label: 'Years Experience' },
  { prefix: '', value: 30, suffix: '+', label: 'Projects Completed' },
];

const logoIconsList = [
  {
    imgPath: '/images/logos/company-logo-1.png',
  },
  {
    imgPath: '/images/logos/company-logo-2.png',
  },
  {
    imgPath: '/images/logos/company-logo-3.png',
  },
  {
    imgPath: '/images/logos/company-logo-4.png',
  },
  {
    imgPath: '/images/logos/company-logo-5.png',
  },
  {
    imgPath: '/images/logos/company-logo-6.png',
  },
  {
    imgPath: '/images/logos/company-logo-7.png',
  },
  {
    imgPath: '/images/logos/company-logo-8.png',
  },
  {
    imgPath: '/images/logos/company-logo-9.png',
  },
  {
    imgPath: '/images/logos/company-logo-10.png',
  },
  {
    imgPath: '/images/logos/company-logo-11.png',
  },
];

const abilities = [
  {
    imgPath: '/images/seo.png',
    title: 'Quality Focus',
    desc: 'Delivering high-quality results while maintaining attention to every detail.',
  },
  {
    imgPath: '/images/chat.png',
    title: 'Reliable Communication',
    desc: 'Keeping you updated at every step to ensure transparency and clarity.',
  },
  {
    imgPath: '/images/time.png',
    title: 'On-Time Delivery',
    desc: 'Making sure projects are completed on schedule, with quality & attention to detail.',
  },
];

const techStackImgs = [
  {
    name: 'React Developer',
    imgPath: '/images/logos/react.png',
  },
  {
    name: 'Next.js Developer',
    imgPath: '/images/logos/react.png',
  },
  {
    name: 'Backend Developer',
    imgPath: '/images/logos/node.png',
  },
  {
    name: 'Full Stack Developer',
    imgPath: '/images/logos/git.svg',
  },
  {
    name: 'TypeScript Developer',
    imgPath: '/images/logos/git.svg',
  },
];

const expCards = [
  {
    imgPath: '/images/exp1.svg',
    logoPath: '/images/ai.png',
    title: '🤖 AI Course Generator',
    skills: [
      'JavaScript',
      'NextJS',
      'Clerk Authentication',
      'Gemini APIs',
      ', Google Cloud',
      'Drizzle ORM',
      'PostgreSQL',
    ],
    responsibilities: [
      'Built a full-stack AI-powered course generation platform using Next.js and React that dynamically creates structured learning content using Gemini AI.',
      'Developed secure authentication and user management using Clerk with protected routes and session handling.',
      'Built API routes and server-side logic in Next.js to securely handle AI requests and data persistence.',
      'Integrated YouTube Data API to automatically fetch and embed relevant educational videos into generated courses.',
    ],
  },
  {
    imgPath: '/images/exp1.svg',
    logoPath: '/images/chat.png',
    title: '💬 UniChat Platform',
    skills: ['JavaScript', 'NextJS', 'Node.js', 'Express', 'Material UI', 'MongoDB', 'Socket.IO', 'AUTH0'],
    responsibilities: [
      'Built a mentorship platform with multi-role portals (students, mentors, admin) using React, Node.js, and MongoDB.',
      'Collaborated in an AGILE environment, working closely with stakeholders to gather requirements of business.',
      'Championed best practices in development, ensuring scalable, and maintainable code by adhering development standards.',
      'Developed Private Real-time Chat using Socket.IO and interactive forums (like, comment) for student engagement.',
    ],
  },
  {
    imgPath: '/images/exp1.svg',
    logoPath: '/images/social.png',
    title: '🌐 Social Networking Platform',
    skills: ['React', 'React Flow', 'Material UI', 'Redux', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    responsibilities: [
      'Developed a full-featured social media platform enabling users to create accounts, edit profile, add experience/education, post content, and interact with other users through likes, comments, and follows, elevating user satisfaction by 20%.',
      'Integrated real-time updates with WebSocket to provide instant notifications and seamless user interactions.',
      'Implemented secure user authentication and authorization using JWT and OAuth2. It checks on every state change.',
      'Collaborated with Git for version control and worked within an Agile development framework to ensure iterative progress.',
      'Created many container components with Redux, dispatched actions to reducer, used middleware to check the token.',
    ],
  },
  {
    imgPath: '/images/exp1.svg',
    logoPath: '/images/food.png',
    title: '🍔 MernEats Platform',
    skills: [
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'Material UI',
      'Redux',
      'Express',
      'MongoDB',
      'JWT',
      'Stripe',
    ],
    responsibilities: [
      'Built a full-stack food ordering system using the full stack enabling restaurant to register and customers to search restaurants, browse menus, filter items by cuisines, place orders, and track the status of their orders in real-time.',
      'Implemented a smooth Stripe payment gateway for processing secure payments, increased operational efficiency by 30%.',
      'Created a secure API for handling user authentication, menu management, and order system with robust CRUD operations.',
      'Contributed 60% and 45% on FE and BE developments ensuring high performance, code quality and system reliability.',
    ],
  },
  {
    imgPath: '/images/exp1.svg',
    logoPath: '/images/scribe.png',
    title: '🎤 Transcription/Translation Platform',
    skills: ['JavaScript', 'Next.js', 'TypeScript', 'CSS', 'MongoDB', 'Beautiful DND'],
    responsibilities: [
      'Built Free Scribe, a web application that records audio or uploads MP3 files and converts speech into accurate text transcripts.',
      'Implemented speech-to-text processing pipeline to automatically transcribe recorded or uploaded audio files.',
      'Developed a multilingual translation feature allowing transcripts to be translated into multiple languages.',
      'Designed an intuitive React-based UI enabling users to record audio directly in the browser or upload files for processing.',
      'Built backend services in Node.js to handle audio uploads, processing, and transcription workflows.',
    ],
  },
  {
    imgPath: '/images/exp5.svg',
    logoPath: '/images/logo5.svg',
    title: '🙋🏻‍♂️ Volunteer Web Developer',
    skills: ['JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'Firebase', 'JWT'],
    responsibilities: [
      'Led the development of my first real-world production project after academic and personal practice builds.',
      'Designed and built a responsive web application for a construction company to showcase their projects and services.',
      'Developed a structured project listing system allowing the company to post completed and ongoing work.',
      'Strengthened the company’s digital presence by transforming their offline workflow into an accessible online platform.',
    ],
  },
];

export const workCards = [
  {
    title: 'Advisor - Best Buy',
    imgPath: '/images/comp1.svg',
    logoPath: '/images/comp1.svg',
    role: 'Sales Associate',
    skills: ['Communication', 'Customer Experience', 'Process', 'Sales', 'Shipping', 'Resolving Issues'],
    date: 'October 2024 – Present',
    responsibilities: [
      'Assisted customers in selecting technology products based on their needs.',
      'Built strong customer relationships through consultative selling and personalized recommendations.',
      'Provided in-depth technical explanations of electronics, accessories, and protection plans.',
      'Consistently contributed to achieving and exceeding monthly sales targets.',
      'Maintained organized and visually appealing product displays to enhance customer experience.',
      'Resolved customer concerns professionally, ensuring high satisfaction and repeat business.',
    ],
  },
];

const testimonials = [
  {
    name: 'Team Member',
    role: 'UniChat Platform - Course Group Project',
    review:
      "Jasmeet demonstrated exceptional collaboration skills during our AGILE development process. His ability to work closely with stakeholders and gather business requirements was instrumental in the project's success. He consistently championed best practices and ensured our codebase remained scalable and maintainable.",
    imgPath: '/images/client4.png',
  },
  {
    name: 'KPU IT Club Member',
    role: 'Social Networking Platform - Team Member',
    review:
      "Working with Jasmeet on the social networking platform was a great experience. His implementation of real-time features using WebSocket and secure authentication with JWT significantly improved our platform's user experience. The 20% increase in user satisfaction speaks to his technical expertise and attention to detail.",
    imgPath: '/images/client3.png',
  },
  {
    name: 'Project Collaborator',
    role: 'MernEats Platform - Team Member',
    review:
      "Jasmeet's contribution to the MernEats platform was outstanding. His work on both frontend and backend, contributing 60% and 45% respectively, ensured high performance and system reliability. The Stripe integration he implemented increased our operational efficiency by 30%, demonstrating his ability to deliver impactful solutions.",
    imgPath: '/images/client1.png',
  },
  {
    name: 'Peer Student',
    role: 'Kwantlen Polytechnic University',
    review:
      "Jasmeet is a dedicated scholar with a CGPA of 3.82 and has been recognized on the Dean's Honour Roll four times. His commitment to academic excellence, combined with his practical development skills, makes him an exceptional software developer. He's always willing to help others and shares his knowledge generously.",
    imgPath: '/images/client2.png',
  },
  {
    name: 'Mentee',
    role: 'Peer Mentorship Program',
    review:
      'As a mentor, Jasmeet provided invaluable guidance during my onboarding process. He helped me navigate university resources, adjust to academic life, and improve my skills. His inclusive and collaborative approach created a supportive environment that significantly enriched my university experience.',
    imgPath: '/images/client5.png',
  },
  {
    name: 'Orientation Participant',
    role: 'Kwantlen Polytechnic University',
    review:
      "Jasmeet served as an excellent Orientation Leader, ensuring a warm and inclusive welcome for new students. His guidance on academic programs, student life, and university resources was incredibly helpful. He's a positive role model who promotes engagement and fosters a sense of community among students.",
    imgPath: '/images/client6.png',
  },
];

const socialImgs = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/jasswebdev',
    imgPath: '/images/linkedin.png',
  },
  {
    name: 'Github',
    link: 'https://github.com/Jasmeet-Singh1',
    imgPath: '/images/github.png',
  },
  {
    name: 'LeetCode',
    link: 'https://leetcode.com/u/Jasmeet_Singh200/',
    imgPath: '/images/LeetCode.png',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  testimonials,
  socialImgs,
  techStackImgs,
  navLinks,
};
