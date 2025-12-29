import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import "./App.css";
import Package from "./sections/Package.tsx";
import Reach from "./sections/Reach.tsx";



const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Package />
      <Reach />
    </>
  );
};

export default App;
