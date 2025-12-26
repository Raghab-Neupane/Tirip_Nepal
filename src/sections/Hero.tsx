import videoSrc from "../assets/Buddhist_Flags_in_Himalayan_Sky.mp4";

const Hero: React.FC = () => {
  return (
    <main className="hero">


      <video className="hero-video" src={videoSrc} autoPlay muted loop playsInline></video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Transforming Tourism <br />
          Through <span>Exploration</span>
        </h1>

      <p>
        Pioneering intelligent solutions that make exploration smarter, simpler, and more personal.

      </p>

      </div>
    </main>
  );
};

export default Hero;
