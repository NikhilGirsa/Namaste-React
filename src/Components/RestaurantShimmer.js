const RestaurantShimmer = () => {
  return (
    <div className="shimmer-parent">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="shimmer-wrapper">
          <div className="shimmer-image"></div>
          <div>
            <div className="shimmer-name"></div>
            <div className="shimmer-ratings"></div>
            <div className="shimmer-location"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantShimmer;
