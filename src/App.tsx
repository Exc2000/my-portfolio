import { Route, Routes } from "react-router-dom";
import Content from "./layout/Content";
import Home from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route element={<Content />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
