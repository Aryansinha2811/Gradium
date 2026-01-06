import Navbar from "../layout/Navbar"
import GigCard from "../sections/GigCard";
import CreateGig from "../sections/CreateGig"
import Footer from "../layout/Footer"

const Gigs = () => {
    return (
            <div >
                <Navbar />
                <GigCard />
                <CreateGig />
                <Footer />
            </div>
    )
    
};

export default Gigs;