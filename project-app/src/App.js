import Cuisine from "./Cuisine";
import Home from "./Home";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="contents">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
