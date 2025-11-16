import { Footer } from "../components/footer/Footer"
import Navbar from "../components/nav/Navbar"
import Intro from "../components/about/Intro"
import Testimonials from "../components/about/Testimonials"
import MissionVision from "../components/about/MissionVisio";
import Features from "../components/about/Features";
import TeamShowcase from "../components/about/TeamShowCase";



export const AboutPage = () => {
    return (
        <div>
      <Navbar />
      <Intro />
      <MissionVision />
      <Features />
      <TeamShowcase />
      <Testimonials />
      <Footer />


      
        </div>
    )
}
