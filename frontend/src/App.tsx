import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NHLStandings from "./NHLStandings";
import NHLNews from "./NHLNews";
import About from "./About";

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NHL" element={<NHLStandings />} />
        <Route path="/NHL-news" element={<NHLNews />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;