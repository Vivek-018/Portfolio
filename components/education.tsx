import type React from "react"
import { GraduationCap, Award, BookOpen } from "lucide-react"

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
      degree: "Master of Computer Applications",
      institution: "Karnataka University",
      location: "Dharwad",
      period: "2018 - 2020",
      description:
        "Specialized in advanced software development and system architecture with a focus on modern web technologies and application design.",
      icon: GraduationCap,
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications",
      institution: "Bangalore Institute of Technology",
      location: "Bangalore",
      period: "2015 - 2018",
      description:
        "Gained a strong foundation in computer science fundamentals, programming languages, and software development methodologies.",
      icon: BookOpen,
    },
    {
      id: 3,
      degree: "Diploma in UI/UX Design",
      institution: "Design Academy",
      location: "Mysore",
      period: "2017",
      description:
        "Intensive program covering user interface design principles, user experience research, prototyping, and modern design tools.",
      icon: Award,
    },
  ]

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "Udemy",
      date: "2021",
      url: "#",
    },
    {
      id: 2,
      title: "Advanced React & Redux",
      issuer: "Coursera",
      date: "2020",
      url: "#",
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      issuer: "Interaction Design Foundation",
      date: "2019",
      url: "#",
    },
    {
      id: 4,
      title: "Japanese Art & Philosophy",
      issuer: "MasterClass",
      date: "2022",
      url: "#",
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
