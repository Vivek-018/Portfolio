import type React from "react"
import { Feather, Compass, Moon, Sun } from "lucide-react"

const PhilosophyCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: React.ElementType
}) => {
  return (
    <div className="bg-black p-6 border border-red-900/20 brush-stroke">
      <div className="flex items-center mb-4">
        <Icon className="text-red-700 mr-3" size={24} />
        <h3 className="text-xl font-bold font-cinzel">{title}</h3>
      </div>
      <p className="text-gray-400 calligraphy">{description}</p>
    </div>
  )
}

const Philosophy = () => {
  const philosophies = [
    {
      title: "Empty Mind",
      icon: Moon,
      description:
        "I approach each project with a clear mind, free from preconceptions. This allows me to see the true nature of problems and find innovative solutions.",
    },
    {
      title: "Dual Mastery",
      icon: Sun,
      description:
        "Like Musashi's two-sword technique, I balance technical expertise with artistic sensibility, creating work that is both functional and beautiful.",
    },
    {
      title: "Constant Refinement",
      icon: Feather,
      description:
        "I believe in continuous improvement, constantly honing my skills and refining my approach to create ever more elegant digital experiences.",
    },
    {
      title: "True Direction",
      icon: Compass,
      description:
        "In the digital landscape, I maintain a clear vision and purpose, ensuring that every element of my work serves the greater objective.",
    },
  ]

  return (
    <section id="philosophy" className="py-20 bg-black relative">
      {/* Decorative ink splash */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="rgba(180, 0, 0, 0.8)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-6 font-cinzel text-center">My Philosophy</h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto calligraphy">
          Inspired by Miyamoto Musashi's "Book of Five Rings," I apply these timeless principles to my digital craft.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophies.map((philosophy) => (
            <PhilosophyCard
              key={philosophy.title}
              title={philosophy.title}
              description={philosophy.description}
              icon={philosophy.icon}
            />
          ))}
        </div>

        <div className="mt-16 p-8 border border-red-900/20 bg-black/50 text-center">
          <blockquote className="text-xl italic text-gray-300 calligraphy">
            "You must understand that there is more than one path to the top of the mountain."
            <footer className="text-red-700 mt-4 font-cinzel">— Miyamoto Musashi</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
