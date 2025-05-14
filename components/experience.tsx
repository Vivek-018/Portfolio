import type React from "react"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Wasserstoff RJ Innovations Pvt. Ltd.",
      date: "Mar 2025 - Present",
      location: "Gurugram, India",
      description: [
        "Building the backend 'engine' for a project, creating efficient APIs using Node.js and Express to power seamless user experiences.",
        "Designing and implementing the database structure with PostgreSQL and Drizzle, ensuring reliable and well-organized data.",
        "Writing robust and maintainable backend code using TypeScript, bringing type safety and clarity to the project's foundation.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Wasserstoff RJ Innovations Pvt. Ltd.",
      date: "Sep 2024 - Mar 2025",
      location: "Gurugram, India",
      description: [
        "Developed scalable web applications using React with Vite for the frontend and Node.js with Express for the backend, integrating RESTful APIs for seamless data exchange.",
        "Designed and implemented database schemas using MongoDB, PostgreSQL, and Drizzle ORM, ensuring efficient data modeling and querying.",
        "Implemented automated testing using Jest for unit testing and QA testing, ensuring high code quality and reliability.",
        "Utilized Puppeteer for web automation tasks, streamlining processes and improving efficiency.",
        "Gained hands-on experience with WebRTC for real-time communication, WebSockets for bi-directional communication, and Docker for containerization, enhancing application performance and deployment."
      ],
    },
    {
      title: "MERN Stack Trainee",
      company: "Ducat Education",
      date: "Jan 2024 - Jul 2024",
      location: "Gurugram, India",
      description: [
        "Acquired foundational knowledge and hands-on experience in building web applications using the MERN stack, covering HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and Mongoose.",
        "Developed skills in designing and implementing dynamic user interfaces using React, creating RESTful APIs with Node.js and Express, and interacting with MongoDB databases using Mongoose.",
        "Gained proficiency in version control using Git and collaboration tools like GitHub, enabling efficient code management and team collaboration.",
        "Mastered the fundamentals of web development, including front-end and back-end technologies, and learned to integrate various tools and frameworks to deliver scalable and efficient web solutions."
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 ink-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-16 font-cinzel text-center flex items-center justify-center">
          {/* <Briefcase className="text-red-700 mr-3" size={32} /> */}
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-black p-6 border border-red-900/20 brush-stroke transition-all duration-300 hover:border-red-700"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold font-cinzel text-red-700">{exp.title}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-400 flex items-center justify-end">
                    <Calendar className="mr-1 text-red-700" size={16} />
                    {exp.date}
                  </p>
                  <p className="text-gray-400 flex items-center justify-end">
                    <MapPin className="mr-1 text-red-700" size={16} />
                    {exp.location}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-700 mr-2">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience