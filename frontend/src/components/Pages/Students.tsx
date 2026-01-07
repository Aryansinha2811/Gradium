import Navbar from "../layout/Navbar"
import StudentsHero from "../sections/StudentHero";
import BenefitsSection from "../sections/StudentBenefit"
import SuccessStories from "../sections/StudentTestimonial"
import Footer from "../layout/Footer"

const Students = () => {
    return (
            <div className="">
                <Navbar />
                <StudentsHero />
                <BenefitsSection />
                <SuccessStories />
                <Footer />
            </div>
    )
    
};

export default Students;