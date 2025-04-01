import { API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantShimmer from "./RestaurantShimmer";
import MealOptions from "./MealOptions";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [mealOptions, setMealOptions] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();

        const meal = jsonData?.data?.cards?.[0];
        setMealOptions(meal);

        const restaurants =
          jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ?? [];
        setRestaurantList(restaurants);
        setFilteredList(restaurants);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  // Debounced search handler
  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      const filteredRestaurant = restaurantList.filter((restaurant) =>
        restaurant?.info?.name
          ?.toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFilteredList(filteredRestaurant);
    }, 300);

    return () => clearTimeout(debounceSearch);
  }, [searchValue, restaurantList]);

  // Render loading shimmer or main content
  if (restaurantList.length === 0) {
    return <RestaurantShimmer />;
  }

  return (
    <div className="body">
      <MealOptions data={mealOptions} />
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => setSearchValue(searchValue)}
        >
          Search
        </button>
      </div>
      <div className="restaurant-cards">
        {filteredList.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
