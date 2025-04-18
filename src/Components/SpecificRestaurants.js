import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { IMG_CDN_URL, RESPECTIVE_URL } from "../utils/constants";
import SpecificRestaurantsShimmer from "./Shimmer/SpecificRestaurantsShimmer";

const SpecificRestaurants = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { collectionId, tag } = location.state || {};
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [headerData, setHeaderData] = useState({
    title: "",
    description: "",
    count: 0,
  });

  useEffect(() => {
    if (!collectionId || !tag) {
      handleError("Required parameters missing");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${RESPECTIVE_URL}${collectionId}&tags=${tag}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
        );

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        const mastheadCard = data?.data?.cards?.find((item) =>
          item?.card?.card["@type"]?.includes("widgets.v2.CollectionMasthead")
        )?.card?.card;

        const restaurants = data?.data?.cards?.filter((item) =>
          item?.card?.card["@type"]?.includes("food.v2.Restaurant")
        );

        setHeaderData({
          title: mastheadCard?.title || "",
          description: mastheadCard?.description || "",
          count: mastheadCard?.count || 0,
        });

        setResData(restaurants || []);
      } catch (err) {
        handleError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionId, tag]);

  const handleError = (message) => {
    setError(message);
    setLoading(false);
    navigate("/error", { state: { error: message } });
  };

  if (loading) return <SpecificRestaurantsShimmer />;

  return (
    <div>
      <div className="header-container flex justify-between items-center p-4 bg-gray-100 shadow-md">
        <div>
          <h1 className="text-2xl font-bold">{headerData.title}</h1>
          <h4 className="text-gray-600">{headerData.description}</h4>
        </div>
        <h2 className="text-lg font-semibold text-gray-700">
          Total: {headerData.count}
        </h2>
      </div>
      <div className="restaurants-container flex flex-wrap justify-center gap-4 p-4">
        {resData.map((restaurant) => {
          const restaurantInfo = restaurant?.card?.card?.info;
          return (
            <Link
              to={`/restaurant/menu/${restaurantInfo?.id}`}
              key={restaurantInfo?.id}
            >
              <div
                key={restaurantInfo?.id}
                className="restaurant-card w-64 bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="restaurant-card-image">
                  <img
                    className="restaurant-image w-full h-40 object-cover"
                    src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId}
                    alt={restaurantInfo?.name || "restaurant"}
                  />
                </div>
                <div className="restaurant-card-details p-4">
                  <p className="text-lg font-bold">{restaurantInfo?.name}</p>
                  <p className="text-sm text-gray-600">
                    {restaurantInfo?.avgRatingString} ⭐️ ·{" "}
                    {restaurantInfo?.sla?.slaString}
                  </p>
                  <p className="text-sm text-gray-500">
                    {restaurantInfo?.areaName}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SpecificRestaurants;
