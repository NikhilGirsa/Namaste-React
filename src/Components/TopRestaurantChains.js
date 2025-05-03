import { Link } from "react-router";
import { IMG_CDN_URL } from "../utils/constants";

const topRestaurants = ({ restaurantData }) => {
  const { header, gridElements } = restaurantData;
  const restaurants = gridElements?.infoWithStyle?.restaurants || [];
  console.log(restaurants);

  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold mb-6 text-gray-800">{header?.title}</h1>
      <div className="flex overflow-x-auto pb-4 scrollbar-hide gap-8">
        {restaurants.map((restaurant) => {
          return (
            <Link
              to={`/restaurant/menu/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
            >
              <div className="restaurant-card">
                <div className="restaurant-card-image">
                  <img
                    className="restaurant-image"
                    src={IMG_CDN_URL + restaurant?.info?.cloudinaryImageId}
                    alt="restaurant"
                  />
                </div>
                <div className="restaurant-card-details">
                  <p>{restaurant?.info?.name}</p>
                  <p>
                    {restaurant?.info?.avgRatingString} ⭐️ ·{" "}
                    {restaurant?.info?.sla?.slaString}
                  </p>
                  <p>{restaurant?.info?.areaName}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default topRestaurants;
