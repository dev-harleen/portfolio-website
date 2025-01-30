import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/header/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/about/About";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
