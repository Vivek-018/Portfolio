import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card bg-black border border-red-900/20 overflow-hidden brush-stroke">
      <div className="relative h-48 md:h-64">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 font-cinzel text-red-700">{project.title}</h3>
        <p className="text-gray-400 mb-4 calligraphy">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-red-900/10 text-gray-300 px-2 py-1 border border-red-900/20">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-red-700 transition-colors"
            >
              <ExternalLink size={16} className="mr-1" /> Live Demo
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-red-700 transition-colors"
            >
              <Github size={16} className="mr-1" /> Code
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Zen Garden Portfolio",
      description:
        "A minimalist portfolio website inspired by Japanese zen gardens, featuring clean design and peaceful aesthetics.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Musashi Code Editor",
      description:
        "A distraction-free code editor with a focus on simplicity and efficiency, inspired by the two-sword technique.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "CodeMirror", "Electron", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Digital Calligraphy App",
      description:
        "An application that transforms text into beautiful digital calligraphy with customizable brush strokes and styles.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Canvas API", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Meditation Timer",
      description:
        "A peaceful meditation timer with ambient sounds and visual cues inspired by traditional Japanese aesthetics.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML", "CSS", "JavaScript", "Web Audio API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Mindful Task Manager",
      description:
        "A productivity tool focused on mindful work habits and balanced productivity, inspired by Eastern philosophy.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Ink Painting Simulator",
      description: "A digital canvas that simulates traditional ink painting techniques with realistic brush physics.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["HTML Canvas", "JavaScript", "WebGL", "React"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-16 font-cinzel text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
