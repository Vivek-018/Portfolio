import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold font-cinzel text-red-700">
              VIVEK <span className="text-gray-300">KUMAR</span>
            </Link>
            <p className="mt-4 text-gray-400 calligraphy">
              "The path of the digital artist is one of constant refinement and peaceful innovation."
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-cinzel text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-red-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-red-700 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#philosophy" className="text-gray-400 hover:text-red-700 transition-colors">
                  Philosophy
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-red-700 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-red-700 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-red-700 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-gray-400 hover:text-red-700 transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-red-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 font-cinzel text-gray-300">Newsletter</h3>
            <p className="text-gray-400 mb-4 calligraphy">
              Subscribe to receive updates on my latest projects and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow bg-black border border-red-900/20 px-4 py-2 text-white focus:outline-none focus:border-red-700"
              />
              <button type="submit" className="bg-red-900/80 hover:bg-red-900 text-white px-4 py-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-red-900/10 text-center text-gray-500">
          <p>© {currentYear} Vivek Kumar. All rights reserved.</p>
          <p className="mt-2 text-sm calligraphy"> Vivek Kumar. All rights reserved.</p>
          {/* <p className="mt-2 text-sm calligraphy">
            "Designed with the tranquility of a master samurai and the artistic spirit of traditional painting."
          </p> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
