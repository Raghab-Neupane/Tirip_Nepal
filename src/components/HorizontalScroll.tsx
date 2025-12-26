import { useRef } from "react";

const HorizontalScroll = ({ children }: { children: React.ReactNode }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <div className="horizontal-scroll">
      <button className="scroll-btn left" onClick={scrollLeft}>‹</button>

      <div className="scroll-viewport" ref={sliderRef}>
        {children}
      </div>

      <button className="scroll-btn right" onClick={scrollRight}>›</button>
    </div>
  );
};

export default HorizontalScroll;
