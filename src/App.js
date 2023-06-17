import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import MenuHeader from "./Components/MenuHeader";
import RandomPicture from "./Components/RandomPicture";
import AboutApod from "./Components/AboutApod";

function App() {
  return (
    <div className="page">
      <MenuHeader></MenuHeader>
      <div className="content">
        <Routes>
          <Route path="/" element={<RandomPicture></RandomPicture>}></Route>
          <Route path="/about" element={<AboutApod></AboutApod>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
