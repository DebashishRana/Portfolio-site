/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // temporarily disabled to test greeting section
  animation: splashAnimation,
  duration: 5000 // Increased duration to 5 seconds to see if splash screen shows
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dev",
  title: "Greetings, I'm Dave",
  subTitle: emoji(
    "A passionate AI engineering student 🚀 having an experience of building cool data pipelines, integrating PowerBI dashboards and developing ML models and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1TntOqf3c3C0oTHKY26cUathmP6ErtekG/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Add this to ensure greeting is displayed
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DebashishRana",
  linkedin: "https://www.linkedin.com/in/Devarana/",
  gmail: "mailto: dimareznokov@gmail.com",
  medium: "https://medium.com/@daver6",
  stackoverflow: "https://stackoverflow.com/users/26118423/dave",
  twitter:"https://www.daver.com" ,
  kaggle: "https://www.kaggle.com/dave8102",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "An AI developer who trains models and analyzes datasets to predict the next big thing and save millions in costs :) ",
  skills: [
    emoji(
      "⚡ Develop machine learning models and AI solutions for data-driven insights"
    ),
    emoji("⚡ Create data pipelines and ETL processes for efficient data processing"),
    emoji(
      "⚡ Build interactive dashboards and visualizations using PowerBI and other tools"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
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
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Christ University Bangalore  ",
      logo: require("./assets/images/Amity University -04.jpg"),
      subHeader: "BCA specialisation in Artifical intelligence and Data Science",
      duration: "September 2025 - October 2028",
      desc: "Relevant CourseWork: Relevant Course Work : Data Structures and Algorithms, Natural Language Processing , Machine Learning, Data Exploration and Visualisation",
      descBullets: [
        "CGPA : 8.9/10",
        "Christ Scholorship for Excellence in Academics holder",
      ]
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: " ML engineering", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data engineering",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Analytics",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",
      company: "Real View Garden",
      companylogo: require("./assets/images/rvg.png"),
      date: "June 2018 – Present",
      desc: "",
      descBullets: [
        "Architected Power BI inventory forecast dashboards reducing procurement waste by 23%",
        "Engineered churn prediction model (Python, Scikit-learn) boosting user retention by 18% via behavioral",
        " Drove 12% conversion lift through SQL-driven analysis of session heatmaps & cart abandonment patterns."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Edunet Foundation x Microsoft ",
      companylogo: require("./assets/images/Yellow and Black Modern Media Logo.png"),
      date: "May 2017 – May 2018",
      desc: "",
      descBullets: [
        "Developed and deployed real-time sign language detection system using CNNs achieving 89% frame-level ",
        "Engineered ML models for predictive analytics, enhancing user engagement by 25%",
        
      ] 
      
    },
    {
      role: "Training and Development Lead",
      company: "Google Developer Group Ranchi",
      companylogo: require("./assets/images/gdg.jpg"),
      date: "Jan 2015 – Sep 2015",
      desc: "",
      descBullets: [" Supporting the GDG Ranchi community by conducting and assisting workshops on Python, data analysis, and ML basics",
        "Helping beginners with hands-on coding sessions, Q&A, and debugging Contributing to community-driven projects and hackathons",
        "Preparing learning materials, presentations, and demos for local events (e.g., DevFest, study jams)"

      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND BIG PROJECTS THAT I HAVE WORKED ON",
  projects: [
    {
      image: require("./assets/images/vquick.png"),
      projectName: "Veriquick",
      projectDesc: "Veriquick is an advanced document verification system designed to authorize and digitalize documentation, making administrative processes seamless and paperless. With its instant QR-based retrieval and automated verification system",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Spotify-Symbol-700x394.png"),
      projectName: "Spotify Exploratory Data Analysis and PowerBI Dashboarding",
      projectDesc: "This project involves analyzing a Spotify dataset with various attributes about tracks, albums, and artists using SQL. It covers an end-to-end process of normalizing a denormalized dataset, performing SQL queries of varying complexity (easy, medium, and advanced), and optimizing query performance. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "CS50 Proogramming with Python",
      subtitle:
        "Mastering the essentials of pythonic programming language and various functions and Building a robust foundation in application and algorithm development by various assignments and one final project . ",
      image: require("./assets/images/harvardLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1m9IxL5DfI1n4qXkCSHEA-eNJGeGAzFGG/view?usp=drive_link"
        },
        {
          name: "My Gradebook ",
          url: "https://submit.cs50.io/courses/1202"
        }
        
      ]
    },
    {
      title: "Microsoft Data Analytics Professional Certification",
      subtitle:
        "ained hands-on experience in Data Analytics, mastering processes such as ETL, data cleaning, and visualization. Proficiently used Power BI, MS Access, and PostgreSQL for data preparation and analytics, enhancing data-driven decision-making skills ",
      image: require("./assets/images/m.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/150EiXDMunhvcC6hNwUVzrztaTWuVsdrg/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Udemy Excel Automation professional certification",
      subtitle: "Gained foundational knowledge in data analytics, focusing on key concepts such as ETL, data cleaning, and visualization. Developed proficiency in advanced Excel functions, including VLOOKUP, XLOOKUP, and other advanced data manipulation techniques.",
      image: require("./assets/images/imag.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1IUsoRgZZNlMQkSqQ9qTVIS3JIkUlhsPg/view?usp=drive_link"},
        {
          
          
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "My Research Papers ",
  subtitle:
    "With Love for what I've discovered i love to share and explore more of what I've learnt because Science is Discovered and Art is created.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9304211754",
  email_address: "dimareznokov@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
