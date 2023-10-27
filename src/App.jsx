import "./App.css";
import Home from "./Component/Home/Home";
import Footer from "./Component/Shared/Footer";
import Navbar from "./Component/Shared/Navbar";

function App() {
  return (
    < div className="w-full">
      <Navbar />
      <Home />
      <Footer />
    </div >
  );
}

export default App;
