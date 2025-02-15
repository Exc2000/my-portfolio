import { Route, Routes } from "react-router-dom";
import Content from "./layout/Content";
import Home from "./pages/Home";
import Skills from "./pages/Skills";


function App() {
  return (
    <Routes>
      <Route element={<Content />}>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
      </Route>
    </Routes>
  );
}

export default App;
