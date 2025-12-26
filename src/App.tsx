import Navbar from "./components/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import "./App.css";
import Package from "./sections/Package.tsx";
import BookingBar from "./components/Bookingbar.tsx";


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Package />
    </>
  );
};

export default App;
