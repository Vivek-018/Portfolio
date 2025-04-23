import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-20 ink-splash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-bold mb-16 font-cinzel text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 font-cinzel text-red-700">The Way of the Digital Artist</h3>
            <div className="space-y-6 calligraphy">
              <p className="text-gray-300">
                I am Vivek Kumar, a passionate developer and digital artist inspired by the philosophy of Miyamoto
                Musashi, Japan's legendary swordsman and artist. Like Musashi, I believe in the harmony of technical
                precision and artistic expression.
              </p>
              <p className="text-gray-300">
                My journey in technology began with a fascination for how digital tools can transform ideas into
                reality. Over the years, I've cultivated a disciplined approach to my craft, embracing both innovation
                and tradition.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me studying traditional art forms, practicing meditation, or exploring
                the philosophical teachings of ancient masters to bring their timeless wisdom into my modern creative
                process.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border border-red-900/30"></div>
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 border border-red-900/30"></div>
              <div className="absolute inset-0">
                <Image
                  src="/placeholder.png?height=400&width=400"
                  alt="Lingadevaru HP"
                  width={400}
                  height={400}
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Ink splash decorative element */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 opacity-20">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="rgba(180, 0, 0, 0.8)"
                    d="M65.7,56.3c0,0,1.1-3.2,4.3-3.2c3.2,0,4.3,3.2,4.3,3.2s3.2-1.1,3.2-4.3c0-3.2-3.2-4.3-3.2-4.3s-1.1-3.2-4.3-3.2 c-3.2,0-4.3,3.2-4.3,3.2s-3.2,1.1-3.2,4.3C62.5,55.2,65.7,56.3,65.7,56.3z M30,60c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10 S35.5,60,30,60z M70,20c-5.5,0-10,4.5-10,10s4.5,10,10,10s10-4.5,10-10S75.5,20,70,20z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
