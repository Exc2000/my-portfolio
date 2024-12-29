import Contact from "./components/Contact";
import Header from "./components/Header";
import Main from "./components/Main";
import { NavBar } from "./components/NavBar";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="overflow-x-hidden text-gray-950 dark:text-white dark:bg-gray-950 bg-white transition-all duration-500 ease-in-out">
    <NavBar />
    <Header/>
    <Main/>
    <Skills/>
    <Project/>
    <Resume/> 
    <Contact/>
    </div>
  );
}

export default App;
