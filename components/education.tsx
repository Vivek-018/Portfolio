import type React from "react"
import { GraduationCap, Award, BookOpen, School, School2 } from "lucide-react"

type Education = {
  id: number
  degree: string
  institution: string
  location: string
  period: string
  description: string
  icon: React.ElementType
}

type Certificate = {
  id: number
  title: string
  issuer: string
  date: string
  url?: string
}

const EducationCard = ({ item }: { item: Education }) => {
  const Icon = item.icon

  return (
    <div className="relative pl-8 pb-12 border-l border-red-900/30">
      <div className="absolute -left-3 top-0 w-6 h-6 bg-red-900/80 rounded-full flex items-center justify-center">
        <Icon size={16} className="text-white" />
      </div>
      <div className="bg-black p-6 border border-red-900/20 brush-stroke">
        <h3 className="text-xl font-bold mb-1 font-cinzel text-red-700">{item.degree}</h3>
        <p className="text-gray-300 mb-2">
          {item.institution}, {item.location}
        </p>
        <p className="text-gray-400 mb-4 text-sm">{item.period}</p>
        <p className="text-gray-300 calligraphy">{item.description}</p>
      </div>
    </div>
  )
}

const CertificateCard = ({ certificate }: { certificate: Certificate }) => {
  return (
    <div className="bg-black p-6 border border-red-900/20 brush-stroke">
      <h3 className="text-lg font-bold mb-1 font-cinzel text-red-700">{certificate.title}</h3>
      <p className="text-gray-300 mb-2">{certificate.issuer}</p>
      <p className="text-gray-400 mb-4 text-sm">{certificate.date}</p>
      {certificate.url && (
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-300 hover:text-red-700 transition-colors underline"
        >
          View Certificate
        </a>
      )}
    </div>
  )
}

const Education = () => {
  const educationItems: Education[] = [
    {
      id: 1,
      degree: "B.Tech in Computer Engineering",
      institution: "I.k Gujral Punjab Technical University",
      location: "Kapurthala",
      period: "2020 - 2024",
      description:
        "Specialized in software development, algorithms, and systems design with hands‑on projects in web apps, embedded systems, and machine learning.Proven teamwork, problem‑solving skills, and a track record of delivering technical solutions.",
      icon: GraduationCap,
    },
    {
      id: 2,
      degree: "MERN Stack Development",
      institution: "Ducat Education",
      location: "Gurugram",
      period: "01/2024 - 07/2024",
      description:
        "Specialized in MERN stack development, building real‑world applications using MongoDB, Express, React, and Node.js.Gained hands‑on experience designing, developing, and deploying full‑stack web solutions end‑to‑end.",
      icon: School2,
    },
    {
      id: 3,
      degree: "Higher Secondary Education",
      institution: "St. Soldier Divine Public School",
      location: "Jalandhar",
      period: "2018 - 2020",
      description:
        "Built solid foundations in core subjects—mathematics, physics, chemistry, and introductory computer concepts—fueling analytical thinking.Developed teamwork and study habits through collaborative projects and extracurricular activities.",
      icon: School,
    },
    {
      id: 4,
      degree: "Secondary Education",
      institution: "L.J.N Dav Public School",
      location: "Jalandhar",
      period: "2018",
      description:
      "Mastered core subjects—mathematics, science, english and introductory computing—while developing disciplined study habits and teamwork through extracurricular activities.",
      icon: School,
    },

  ]

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Complete Web Development course",
      issuer: "Udemy",
      date: "2025",
      url: "#",
    },
    {
      id: 2,
      title: "Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      url: "https://www.udemy.com/certificate/UC-543faea7-a944-4dee-907d-c23761721b64/",
    },
    {
      id: 3,
      title: "IT Fundamentals:Everything You Need To Know about IT",
      issuer: "Udemy",
      date: "2023",
      url: "https://www.udemy.com/certificate/UC-43ddcb48-fb4c-4cb6-833e-006516026c90/",
    },


  ]

  return (
    <section id="education" className="py-20 ink-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-16 font-cinzel text-center">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 font-cinzel text-red-700">Academic Journey</h3>
            <div className="space-y-6">
              {educationItems.map((item) => (
                <EducationCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 font-cinzel text-red-700">Certifications</h3>
            <div className="space-y-6">
              {certificates.map((certificate) => (
                <CertificateCard key={certificate.id} certificate={certificate} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
