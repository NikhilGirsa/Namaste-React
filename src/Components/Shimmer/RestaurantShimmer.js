const RestaurantShimmer = () => {
  return (
    <>
      <div className="meal-options-shimmer">
        <div className="meal-options-shimmer-header"></div>
        <div className="meal-options-shimmer-grid">
          {Array(10)
            .fill()
            .map((_, index) => (
              <div className="meal-options-shimmer-card" key={index}>
                <div className="meal-options-shimmer-img">
                  <div className="meal-options-shimmer-text"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="shimmer-search">
        <div className="shimmer-search-btn"></div>
      </div>
      <div className="shimmer-parent">
        {Array(10)
          .fill()
          .map((_, index) => (
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
    </>
  );
};

export default RestaurantShimmer;
