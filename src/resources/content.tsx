import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";


const person: Person = {
  firstName: "Oghuz",
  lastName: "Hasanli",
  name: `Oghuz Hasanli`,
  role: "AI & Machine Learning Engineer",
  avatar: "/images/oghuz.jpg",
  email: "oguzhsnli2@gmail.com",
  location: "Asia/Baku", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English (Intermediate)", "Azerbaijani (Proficiency)", "Turkish (Proficiency)"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Oghuz20",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/oghuzhasanli",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/_o_hasanli/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/oghuz.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building intelligent systems with AI & Machine Learning</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Go to</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Real portfolio
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm Oghuz, an AI & Machine Learning Engineer based in Baku.
      I focus on computer vision, predictive modeling, and data-driven systems.
      I enjoy building intelligent solutions using machine learning,
      deep learning, and modern data science tools.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
    <>
      Oghuz Hasanli is a motivated and self-driven aspiring Data Scientist
      with hands-on experience in machine learning, data analysis, and
      model development. He completed a Data Science Internship at QSS Analytics,
      where he worked on data cleaning, feature engineering, and building ML models
      using Python and SQL.
      <br /><br />
      In addition, he served as a Python Mentor at Data Science Academy,
      guiding beginner-level students and strengthening his communication
      and analytical skills. His primary interests include computer vision,
      deep learning, and applying AI to real-world challenges.
    </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Internship Experiences",
    experiences: [
      {
        company: "Baku Higher Oil School",
        timeframe: "2021 - Present",
        role: "Process Automation Engineer",
        achievements: [
          <>
            Studying automation systems, control theory, and industrial processes,
            building a strong engineering foundation for intelligent system design.
          </>,
          <>
            Applying analytical thinking and problem-solving skills to both
            engineering and machine learning projects.
          </>,
        ],
        images: [
          {
            src: "/images/projects/bhos.jpeg",
            alt: "Baku Higher Oil School",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "QSS Analytics",
        timeframe: "May 2025 – August 2025",
        role: "Data Science Intern",
        achievements: [
          <>
            Worked on real-world datasets performing data cleaning,
            preprocessing, and feature engineering.
          </>,
          <>
            Built and evaluated machine learning models using Python and SQL,
            improving practical understanding of model performance metrics.
          </>,
        ],
        images: [],
      },
      {
        company: "Data Science Academy",
        timeframe: "June 2025 – August 2025",
        role: "Python Mentor",
        achievements: [
          <>
            Mentored beginner-level students in Python programming,
            helping them understand coding logic and debugging techniques.
          </>,
          <>
            Reviewed assignments and provided constructive feedback
            to improve problem-solving and analytical skills.
          </>,
        ],
        images: [],
      },
],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Baku Higher Oil School",
        description: (
          <>Pursuing a Bachelor's degree in Process Automation Engineering.</>
        ),
      },
      {
        name: "Code Next – Technest Scholarship Program",
        description: (
          <>
            Completed Data Science & Machine Learning Course focused on
            Python programming, data preprocessing, ML algorithms,
            and model evaluation through hands-on assignments.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Landslide Detection – Satellite AI",
        description: (
          <>
            Deep learning-based semantic segmentation model for detecting
            landslides from satellite imagery using UNet++ architecture.
            Focused on handling class imbalance and improving F1-score performance.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Deep Learning", icon: "tensorflow" },
          { name: "Computer Vision", icon: "image" },
        ],
        images: [
          {
            src: "/images/projects/landslide.png",
            alt: "Landslide Detection Project",
            width: 24,
            height: 16,
          },
        ],
      },
      {
        title: "Cats vs Dogs Classification",
        description: (
          <>
            Convolutional Neural Network (CNN) model for binary image
            classification between cats and dogs.
            Implemented preprocessing, model training, and evaluation.
          </>
        ),
        tags: [
          { name: "CNN", icon: "cpu" },
          { name: "Image Classification", icon: "image" },
          { name: "Machine Learning", icon: "python" },
        ],
        images: [
          {
            src: "/images/projects/test_example.png",
            alt: "Cats vs Dogs Project",
            width: 24,
            height: 16,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI, Machine Learning & Engineering",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
