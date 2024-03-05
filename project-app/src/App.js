import Cuisine from "./Cuisine";
import Home from "./Home";
import NavBar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchedFoods from "./SearchedFoods";
import RecipeProcedure from "./RecipeProcedure";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="contents">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/searched/:search" element={<SearchedFoods />} />
            <Route path="/recipes/:name" element={<RecipeProcedure />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
