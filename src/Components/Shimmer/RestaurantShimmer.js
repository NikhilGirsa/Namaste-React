const RestaurantShimmer = () => {
  return (
    <div className="p-4">
      {/* Meal Options shimmer */}
      <div className="px-4 py-6 max-w-6xl mx-auto">
        {/* Title Shimmer */}
        <div className="h-7 w-48 mb-6 bg-gray-200 rounded-full animate-pulse"></div>

        {/* Food Items Shimmer */}
        <div className="flex overflow-x-auto pb-4 scrollbar-hide gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex-shrink-0 w-28">
              <div className="relative group">
                {/* Image Shimmer */}
                <div className="w-24 h-28 rounded-lg shadow-md bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Restaurant Chains shimmer */}
      <div className="px-4 py-6 max-w-6xl mx-auto">
        {/* Title Shimmer */}
        <div className="h-7 w-64 mb-6 bg-gray-200 rounded-full shimmer-gradient"></div>

        {/* Restaurant Cards Shimmer */}
        <div className="flex overflow-x-auto pb-4 scrollbar-hide gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <div className="restaurant-card">
                {/* Image Shimmer */}
                <div className="restaurant-card-image h-48 shimmer-gradient rounded-lg">
                  <div className="w-full h-40 bg-gray-200 rounded-lg shimmer-gradient"></div>
                </div>

                {/* Details Shimmer */}
                <div className="restaurant-card-details mt-3 space-y-2">
                  <div className="h-5 w-3/4 bg-gray-200 rounded shimmer-gradient"></div>
                  <div className="h-4 w-1/2 bg-gray-200 rounded shimmer-gradient"></div>
                  <div className="h-4 w-2/3 bg-gray-200 rounded shimmer-gradient"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search bar shimmer */}
      <div className="flex justify-center items-center gap-2 mb-6">
        <div className="h-10 w-64 bg-gray-200 rounded-md animate-pulse" />
        <div className="h-10 w-24 bg-gray-300 rounded-md animate-pulse" />
      </div>

      {/* Restaurant card grid shimmer */}
      <div className="px-4 py-6 max-w-6xl mx-auto">
        {/* Title Shimmer */}
        <div className="h-7 w-3/4 mb-6 shimmer-gradient rounded-full"></div>

        {/* Grid Shimmer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="restaurant-card">
              {/* Image Shimmer */}
              <div className="restaurant-card-image h-48 shimmer-gradient rounded-lg"></div>

              {/* Details Shimmer */}
              <div className="restaurant-card-details mt-3 space-y-2">
                <div className="h-5 w-3/4 shimmer-gradient rounded"></div>
                <div className="h-4 w-1/2 shimmer-gradient rounded"></div>
                <div className="h-4 w-2/3 shimmer-gradient rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantShimmer;
