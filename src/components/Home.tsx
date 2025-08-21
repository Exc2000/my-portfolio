import { AboutMe } from "./sections/AboutMe";
import { Footer } from "./sections/Footer";
import { GetInTouch } from "./sections/GetInTouch";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Project";
import { Resume } from "./sections/Resume";
import TopNav from "./sections/TopNav";


const Home = () =>{
    return(
        <div>
            <TopNav/>
            <Hero/>
            <Projects/>
            <Resume/>
            <AboutMe/>
            <GetInTouch/>
            <Footer/>
        </div>
    )
}

export default Home;