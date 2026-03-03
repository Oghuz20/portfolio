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
  firstName: "Hasanali",
  lastName: "Asadov",
  name: `Hasanali Asadov`,
  role: "Full-stack Developer",
  avatar: "/images/roma.jpeg",
  email: "hasanaliasadov@gmail.com",
  location: "Asia/Baku", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Turkish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hasanasadd",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hasanaliasadov",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/hasanasadd/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@hasanasadd",
    essential: true,
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
  image: "/images/roma.jpeg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
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
    href: "https://asadov.site",
  },
  subline: (
    <>
      I'm Hasanali, a design engineer at{" "}
      <Text as="span" size="xl" weight="strong">
        Code Academy
      </Text>
      , where I craft intuitive <br /> user experiences. After hours, I build my
      own projects.
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
        Hasanali is a passionate Full-stack Developer with a knack for creating
        efficient and scalable web applications. With a strong foundation in both
        front-end and back-end technologies, he excels at bridging the gap
        between design and functionality. When he's not coding, Hasanali enjoys
        exploring new technologies and contributing to open-source projects.
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
            Implemented automation solutions that reduced manual processing time
            by 30%, enhancing overall operational efficiency.
          </>,
          <>
            Collaborated with cross-functional teams to design and deploy a new
            data management system, improving data accuracy by 25%.
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
        company: "SOCAR ITRI",
        timeframe: "2024 - 2024",
        role: "Frontend Developer Intern",
        achievements: [
          <>
            Developed and maintained user-friendly web interfaces using React,
            enhancing user experience and engagement.
          </>,
          <>
            Worked closely with designers to implement responsive design
            principles, ensuring optimal performance across various devices.
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
        name: "University of Ruse, Bulgaria, Erasmus+ Program",
        description: (
          <>
            Studied Process Automation Engineering for one semester under the
            Erasmus+ program.
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
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js  + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/port.png",
            alt: "Project image",
            width: 24,
            height: 16,
          },
        ],
      },
      {
        title: "LabVIEW",
        description: <>Creating complex automation systems with LabVIEW.</>,
        tags: [
          {
            name: "LabVIEW",
            icon: "labview",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
