import videoSrc from "../assets/Buddhist_Flags_in_Himalayan_Sky.mp4";
import BookingBar from "../components/Bookingbar";

const Hero: React.FC = () => {
  return (
    <main className="hero">


      <video className="hero-video" src={videoSrc} autoPlay muted loop playsInline></video>

      <div className="hero-overlay"></div>

      <div className="hero-tittle">
        <h1>
          <span>Exploring </span>Tourism <br />
        </h1>
      </div>
      <div className="hero-subtittle">
      <p>
        Pioneering intelligent solutions that make exploration smarter, simpler, and more personal.

      </p>

      </div>
      <BookingBar />
    </main>
  );
};

export default Hero;
