import { useEffect, useState, useCallback } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantShimmer from "./RestaurantShimmer";

const API_URL =
  "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6325031&lng=77.0865536&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      const restaurants =
        jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ?? [];
      setRestaurantList(restaurants);
      setFilteredList(restaurants);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleSearch = useCallback(() => {
    const filteredRestaurant = restaurantList.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredList(filteredRestaurant);
  }, [restaurantList, searchValue]);

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      handleSearch();
    }, 300);
    return () => clearTimeout(debounceSearch);
  }, [searchValue, handleSearch]);

  return restaurantList.length === 0 ? (
    <RestaurantShimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
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
