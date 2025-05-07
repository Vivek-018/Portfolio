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
        "Led the development of responsive, high-performance web applications used by over 1 million users monthly.",
        "Mentored junior developers and implemented code review best practices to improve team efficiency.",
        "Integrated accessibility standards (WCAG 2.1) across all applications, improving usability for all users.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Wasserstoff RJ Innovations Pvt. Ltd.",
      date: "Sep 2024 - Mar 2025",
      location: "Gurugram, India",
      description: [
        "Built scalable applications using React, Node.js, and MongoDB, supporting 500k+ monthly active users.",
        "Collaborated with cross-functional teams to deliver product features using Agile methodologies.",
        "Optimized application performance through code splitting and lazy loading, reducing load times by 35%.",
      ],
    },
    {
      title: "MERN Stack Trainee",
      company: "Ducat Education",
      date: "Jan 2024 - Jul 2024",
      location: "Gurugram, India",
      description: [
        "Developed client-facing websites using HTML, CSS, JavaScript, and WordPress.",
        "Worked closely with designers to transform mockups into fully functional web pages.",
        "Gained hands-on experience with version control using Git and collaborated with a small development team.",
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