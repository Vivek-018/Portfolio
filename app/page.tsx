import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Philosophy from "@/components/philosophy"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Philosophy />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}
