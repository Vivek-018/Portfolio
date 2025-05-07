import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section h-screen flex items-center justify-center text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Ink splash decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-red-900/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-red-900/5 blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="brush-border p-8 md:p-12 bg-black/30 backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-cinzel">
            <span className="text-red-700">VIVEK</span>{" "}
            <span className="text-gray-300">KUMAR</span>
          </h1>
          <h2 className="text-xl md:text-3xl mb-8 text-gray-300 font-light">
            Developer • Engineer • Tech Enthusiast
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-400 calligraphy">
            “Building with heart, shipping with purpose.”
            <br />
            Crafting features that matter, for people who matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#projects"
              className="zen-button text-red-700 hover:text-red-600 px-8 py-3 font-cinzel"
            >
              View Projects
            </Link>
            <Link
              href="#philosophy"
              className="zen-button text-gray-300 hover:text-white px-8 py-3 font-cinzel"
            >
              My Philosophy
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-16 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-700 rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
