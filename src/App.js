import "./App.css";
import Footer from "./Components/Footer";
import MenuHeader from "./Components/MenuHeader";
import RandomPicture from "./Components/RandomPicture";

function App() {
  return (
    <div className="page">
      <MenuHeader></MenuHeader>
      <div className="content">
        <RandomPicture></RandomPicture>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
