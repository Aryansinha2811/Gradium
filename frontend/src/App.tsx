import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import FeaturedProfiles from "./components/sections/FeaturedProfile"
import HowItWorks from "./components/sections/HowGradiumWorks"
import Testimonials from "./components/sections/Testimonial"
import FAQ from "./components/sections/FAQs"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #0F0F0F 40%, #0F1C3B 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <FeaturedProfiles />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default App
