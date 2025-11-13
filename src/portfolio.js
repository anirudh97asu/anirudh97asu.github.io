/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anirudh Rajhgopalann",
  title: "Hi all, I'm Anirudh",
  subTitle: emoji(
    "A passionate Data Scientist & Machine Learning Engineer 🚀 with 3.5+ years of experience building real-world AI applications. Proficient in Machine Learning, Deep Learning, Computer Vision, NLP, and Generative AI."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vtZkNX5TxXsTPamNbDc3qqjo5w7twtGq/view?usp=drive_link", // Upload your resume to Google Drive or GitHub and add the link
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anirudh-s97",
  linkedin:
    "https://www.linkedin.com/in/anirudh-rajhgopalann-srinivaasrajagopal-4a530a307/",
  gmail: "asrin101@asu.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "DATA SCIENTIST & ML ENGINEER WHO LOVES TO BUILD AI-POWERED SOLUTIONS",
  skills: [
    emoji(
      "⚡ Build and deploy advanced Machine Learning models for real-world applications"
    ),
    emoji(
      "⚡ Develop Computer Vision and NLP solutions using state-of-the-art models"
    ),
    emoji(
      "⚡ Create Generative AI applications leveraging LLMs, RAG systems, and AI Agents"
    ),
    emoji(
      "⚡ Design and implement end-to-end ML pipelines with deployment using microservices"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "opencv",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "huggingface",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "jupyter",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/harvardLogo.png"), // Using existing placeholder logo
      subHeader:
        "Master of Science in Robotics & Autonomous Systems (AI Focus)",
      duration: "August 2024 - Present",
      desc: "Specialization in Artificial Intelligence",
      descBullets: [
        "Focusing on advanced AI, Machine Learning, and Robotics",
        "Current student seeking internship opportunities starting May 2025"
      ]
    },
    {
      schoolName: "Sri Venkateswara College of Engineering",
      logo: require("./assets/images/stanfordLogo.png"), // Using existing placeholder logo
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "June 2015 - May 2019",
      desc: "Foundation in Computer Science and Engineering",
      descBullets: [
        "Built strong fundamentals in algorithms, data structures, and software engineering"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning / AI",
      progressPercentage: "90%"
    },
    {
      Stack: "Computer Vision / NLP",
      progressPercentage: "85%"
    },
    {
      Stack: "MLOps / Deployment",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Machine Learning Engineer II",
      company: "Rapid Acceleration Partners",
      companylogo: require("./assets/images/facebookLogo.png"), // Using existing placeholder logo
      date: "November 2023 – July 2024",
      desc:
        "Built AI-powered solutions for enterprise clients using advanced ML and Generative AI",
      descBullets: [
        "Architected AI-powered check information extraction using YOLOv8 and Visual Language Models, achieving 80% accuracy and 50% manual effort reduction",
        "Developed RAG-based diagnostic system using Sentence Transformers and Chroma DB, reducing ticket resolution time by 20%",
        "Improved Table Structure Recognition models by 5% through training latest YOLO models",
        "Presented compelling demos showcasing Generative AI and LLMs capabilities to partner clients"
      ]
    },
    {
      role: "Data Scientist",
      company: "Straive",
      companylogo: require("./assets/images/quoraLogo.png"), // Using existing placeholder logo
      date: "September 2021 – November 2023",
      desc:
        "Developed ML solutions for patent analysis and document processing",
      descBullets: [
        "Built patent grouping pipeline using Transformers achieving 74% accuracy",
        "Created Flask API endpoints and deployed ML models with DevOps team",
        "Trained text classification models reaching 92% F1-Score, reducing manual efforts",
        "Developed YOLOv3 POC for restaurant image analysis achieving 74% mAP for 12 unique features",
        "Optimized data pipelines achieving 90% accuracy in text extraction while preserving document layout"
      ]
    },
    {
      role: "Data Science Intern",
      company: "Straive",
      companylogo: require("./assets/images/airbnbLogo.png"), // Using existing placeholder logo
      date: "June 2021 – September 2021",
      desc:
        "Supported data collection and synthetic data generation for Computer Vision projects",
      descBullets: [
        "Scraped 2,000+ restaurant images using Scrapy for Computer Vision POC",
        "Created synthetic form data using OpenCV and MNIST dataset, improving OCR accuracy by 3%",
        "Transformed tabular data from multi-page financial PDFs generating $1000 in revenue"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SELECTED AI/ML PROJECTS SHOWCASING MY TECHNICAL SKILLS",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // Using existing placeholder image
      projectName: "Intelligent File Management & Task Automation Agent",
      projectDesc:
        "Engineered an intelligent file management system using Google's Gemini 2.0 with three-stage architecture (LLM Engine, Task Scheduler, AI Agents) for automated file processing via natural language",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/anirudh-s97" // Add your project link
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Using existing placeholder image
      projectName: "Hindi BPE Tokenizer - Hugging Face Space",
      projectDesc:
        "Built a GPT-2 like tokenizer from scratch using Byte Pair Encoding with 5k vocabulary for Hindi, handling boundary cases. Launched interactive Hugging Face Space with Gradio",
      footerLink: [
        {
          name: "View on HuggingFace",
          url: "https://huggingface.co/" // Add your HuggingFace Space link
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: "Professional Certifications and Achievements",

  achievementsCards: [
    {
      title: "Applied AI Course",
      subtitle:
        "Comprehensive online course covering Machine Learning, Statistics, Linear Algebra, Computer Vision, and NLP with emphasis on practical real-world projects",
      image: require("./assets/images/codeInLogo.webp"), // Using existing placeholder image
      imageAlt: "Applied AI Course Logo",
      footerLink: [
        {
          name: "Certification",
          url: "" // Add certificate link if available
        }
      ]
    }
  ],
  display: true
};

// Blogs Section - Changed to GitHub Pages

const blogSection = {
  title: "Blog",
  subtitle: "I write about Machine Learning, AI, and my technical journey",
  displayMediumBlogs: "false", // Disabled Medium blogs
  blogs: [
    {
      url: "https://anirudh-s97.github.io/blog/post-1", // Replace with your actual GitHub Pages blog URL
      title: "Your Blog Post Title",
      description: "Description of your blog post"
    }
    // Add more blog posts as you create them
  ],
  display: true // Set to false if you don't have a blog yet
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY KNOWLEDGE AND EXPERIENCES"),

  talks: [
    // Add your talks here when you have them
  ],
  display: false // Set to true when you have talks to display
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "DISCUSSIONS ABOUT AI AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // Add podcast links here
  ],
  display: false // Set to true when you have podcasts
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-602-807-9820",
  email_address: "asrin101@asu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", // Replace with your Twitter username if you have one
  display: false // Set true to display this section
};

const isHireable = true; // Set to true since you're looking for internship opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};