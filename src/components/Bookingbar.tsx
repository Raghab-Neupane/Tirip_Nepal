const BookingBar = () => {
  return (
    <div className="Booking-card">
        <div className="search">
            <input type="text" placeholder="Search for packages..." />
            <button>Search</button>
        </div>
        <div className="no-of-people">
            <label htmlFor="people">No. of People:</label>
            <input type="number" id="people" min="1" defaultValue="1" />
        </div>
        <div className="booking-button">
            <button>Book Now</button>
        </div>
    </div>
  );
};

export default BookingBar;
