import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router";

const MealOptions = ({ data }) => {
  console.log(data);
  const title = data?.card?.card?.header?.title || "No Title Available";
  const foodItems = data?.card?.card?.imageGridCards?.info || [];

  const extractParams = (link) => {
    if (!link) return {}; // Return empty if no link provided

    try {
      const url = new URL(link);
      const params = new URLSearchParams(url.search);

      // Extract collection ID (priority: query param > path segment)
      const collectionIdFromParams = params.get("collection_id");
      const collectionIdFromPath = url.pathname
        .split("/")
        .filter(Boolean)
        .pop();

      // Extract tag (only from query params)
      const tag = params.get("tags");

      return {
        collectionId: collectionIdFromParams || collectionIdFromPath,
        tag: tag,
      };
    } catch (error) {
      console.error("Error parsing link URL:", error);
      return {};
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>{title}</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {foodItems.length > 0 ? (
          foodItems.map((item) => {
            const { collectionId, tag } = extractParams(item?.action?.link);
            return (
              <div
                key={item.id}
                style={{
                  margin: "20px",
                  textAlign: "center",
                  maxWidth: "150px",
                }}
              >
                <Link
                  to={`/details/${collectionId}`}
                  state={{
                    collectionId,
                    tag,
                  }}
                >
                  <img
                    src={IMG_CDN_URL + item.imageId}
                    alt={item.accessibility?.altText || "Food Item"}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      marginBottom: "10px",
                      transition: "transform 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <p>No food items available.</p>
        )}
      </div>
    </div>
  );
};

export default MealOptions;
