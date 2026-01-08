import Navbar from "../layout/Navbar"
import ClientHero from "../sections/ClientHero"
import WhyHireStudents from "../sections/WhyHireStudent"
import FAQ from "../sections/FAQs"
import Footer from "../layout/Footer"

const Client = () => {
    return (
            <div>
                <Navbar />
                <ClientHero />
                <WhyHireStudents />
                <FAQ />
                <Footer />
            </div>
    )
    
};

export default Client;