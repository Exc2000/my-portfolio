import { Route, Routes } from "react-router-dom";
import Content from "./layout/Content";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";


function App() {
  return (
    <Routes>
      <Route element={<Content />}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
