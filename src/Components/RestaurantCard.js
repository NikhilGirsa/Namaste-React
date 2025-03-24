import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantData }) => {
  const { id, name, avgRatingString, cloudinaryImageId, areaName, sla } =
    restaurantData?.info;

  return (
    <div key={id} className="restaurant-card">
      <div className="restaurant-card-image">
        <img
          className="restaurant-image"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="restaurant"
        />
      </div>
      <div className="restaurant-card-details">
        <p>{name}</p>
        <p>
          {avgRatingString} ⭐️ · {sla?.slaString}
        </p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
