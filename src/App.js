import "./App.css";
import Footer from "./Components/Footer";
import MenuHeader from "./Components/MenuHeader";
import RandomPicture from "./Components/RandomPicture";

function App() {
  return (
    <div className="page">
      <MenuHeader></MenuHeader>
      <div className="content">
        <h1 className="main-header">Random Astronomy Picture of the Day</h1>
        <RandomPicture></RandomPicture>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
