const SpecificRestaurantsShimmer = () => {
  return (
    <div>
      {/* Header Shimmer */}
      <div className="header-container flex justify-between items-center p-4 bg-gray-100 shadow-md">
        <div>
          <div className="h-8 w-64 bg-gray-300 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-80 bg-gray-300 rounded animate-pulse"></div>
        </div>
        <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
      </div>

      {/* Restaurants Grid Shimmer */}
      <div className="restaurants-container flex flex-wrap justify-center gap-4 p-4">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="restaurant-card w-64 bg-white shadow-lg rounded-lg overflow-hidden animate-pulse"
          >
            <div className="restaurant-card-image h-48 shimmer-gradient rounded-lg">
              <div className="w-full h-40 bg-gray-200 rounded-lg shimmer-gradient"></div>
            </div>
            <div className="restaurant-card-details mt-3 space-y-2">
              <div className="h-5 w-3/4 bg-gray-300 rounded mb-3"></div>
              <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecificRestaurantsShimmer;
