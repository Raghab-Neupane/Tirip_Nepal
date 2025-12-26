import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import "./App.css";
import Services from "./sections/Services.tsx";


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
    </>
  );
};

export default App;
