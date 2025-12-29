import Statdispcard from "./Statcard/Statdispcard.tsx";


const StatCard: React.FC = () => {
  return (
    <>
      <div className="stat-card-1">
        <Statdispcard 
        title="500+ Travellers"
        description="We were believed by them!"
        />
      </div>
      <div className="stat-card-2">
        <Statdispcard 
        title="300+ Destinations"
        description="Explore various locations with us!"
        />
      </div>
    </>
  );
};

export default StatCard;
