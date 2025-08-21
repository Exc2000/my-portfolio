import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Project";
import TopNav from "./sections/TopNav";


const Home = () =>{
    return(
        <div>
            <TopNav/>
            <Hero/>
            <Projects/>
        </div>
    )
}

export default Home;