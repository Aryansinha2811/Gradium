import Navbar from "../layout/Navbar"
import Hero from "../sections/Hero"
import FeaturedProfiles from "../sections/FeaturedProfile"
import HowItWorks from "../sections/HowGradiumWorks"
import Testimonials from "../sections/Testimonial"
import FAQ from "../sections/FAQs"
import Footer from "../layout/Footer"

export default function Home() {
    return (
        <>
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <FeaturedProfiles />
                <HowItWorks />
                <Testimonials />
                <FAQ />
                <Footer />
            </div>

        </>
    )
}