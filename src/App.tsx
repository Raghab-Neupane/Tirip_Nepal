import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import "./App.css";


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default App;
