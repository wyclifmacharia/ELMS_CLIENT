import Navbar from "../components/nav/Navbar"
import  HeroSection from "../components/hero/Hero"
import FeaturesSection from "../components/hero/FeatureSection"
import WorkflowSection from "../components/hero/WorkFlow"
import { Services } from "../components/hero/Service "
import Testimonials from "../components/about/Testimonials"
import { Footer } from "../components/footer/Footer"


const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection/>
            <Services />
            <FeaturesSection />
            <WorkflowSection />
             <Testimonials />
            <Footer />
        </div>
    )
}

export default LandingPage