/* change anything on the webpage with one file*/
import {
    mobile,
    pd,
    eduvos1,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    python,
    pandas,
    numpyicon,
    matplotlib,
    sklearn,
    tensorflow,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    wbhs,
    customer_churn,
    asl,
    carrent,
    jobit,
    tripguide,
    threejs,
    spark,
    sql,
    jupyter,
    aws,
    githublogo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Machine Learning",
      icon: web,
    },
    {
      title: "Data Visualization",
      icon: mobile,
    },
    {
      title: "Data Analysis",
      icon: backend,
    },
    {
      title: "Python",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Pandas",
      icon: pandas,
    },
    {
      name: "Numpy",
      icon: numpyicon,
    },
    {
      name: "Matplotlib",
      icon: matplotlib,
    },
    {
      name: "Sklearn",
      icon: sklearn,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "Spark",
      icon: spark,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Jupyter",
      icon: jupyter,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Github",
      icon: githublogo,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "High School",
      company_name: "Westville Boys' High School",
      icon: wbhs,
      iconBg: "#E6DEDD",
      date: "Matriculated 2022",
      points: [
        "I acquired skills on leadership and teamwork.",
        "I developed the necessary discipline and hard work to attain desired outcomes",
        "Proficiency in critical thinking was a key skill learned.",
        "One of the paramount skills I gained during my high school tenure was a comprehensive understanding of problem-solving methodologies and approaches.",
      ],
    },
    {
      title: "BSc Information Technology (Data Science)",
      company_name: "Eduvos",
      icon: eduvos1,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Learned an array of invaluable skills centered around the field of Data Science.",
        "Developed core mathematical concepts such as Linear Algebra, Calculus, Statistics and Probability.",
        "Increased my leadership skills by taking part in national competitions.",
        "Gained insight about the field from industry experts.",
      ],
    },
    {
      title: "Machine Learning",
      company_name: "Pierian Data - Udemy",
      icon: pd,
      iconBg: "#E6DEDD",
      date: "Dec 2023 - March 2024",
      points: [
        "Exploratory Data Analysis tools such as Numpy & Pandas.",
        "Data Visualization techniques using tools such as Matplotlib & Seaborn.",
        "Supervised and Unsupervised Machine learning models such as Tree Based Methods, Linear Regression,K-Means Clustering, etc...",
        "Developed an understanding of the mathematics behind each machine learning model.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Customer Churn Analysis",
      description:
        "A Notebook that critically evaluates and explains the data at hand using visualization. The data is then manipulated and evaluated to best show the reasons for customers leaving the service.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
        {
          name: "matplotlib",
          color: "pink-text-gradient",
        },
      ],
      image: customer_churn,
      source_code_link: "https://github.com/Bowman1410/Predictive-Customer-Churn-Analysis.git",
    },
    {
      name: "ASL Alphabet Recognition",
      description:
        "A machine learning model that uses Convolutional Neural Networks to recognize American Sign Language (ASL) alphabets using TensorFlow and Keras.",
      tags: [
        {
          name: "TensorFlow",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        {
          name: "CNN",
          color: "pink-text-gradient",
        },
      ],
      image: asl,
      source_code_link: "https://github.com/Bowman1410/ASL_Alphabet_Recognition",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };