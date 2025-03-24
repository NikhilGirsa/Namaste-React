const MealOptions = () => {
  const foodItems = [
    {
      name: "Chole Bhature",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chole%20Bhature.png",
      collectionId: 80382,
    },
    {
      name: "North Indian",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png",
      collectionId: 83633,
    },
    {
      name: "Pizza",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
      collectionId: 83631,
    },
    {
      name: "Burger",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
      collectionId: 83637,
    },
    {
      name: "Paratha",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png",
      collectionId: 80475,
    },
    {
      name: "Idli",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png",
      collectionId: 80440,
    },
    {
      name: "Dosa",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png",
      collectionId: 80424,
    },
    {
      name: "Cake",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
      collectionId: 83655,
    },
    {
      name: "Biryani",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png",
      collectionId: 83639,
    },
    {
      name: "Rolls",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png",
      collectionId: 83669,
    },
    {
      name: "PanCake",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pancake.png",
      collectionId: 80471,
    },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        What's on your mind today?
      </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {foodItems.map((item, index) => (
          <div
            key={index}
            style={{ margin: "20px", textAlign: "center", maxWidth: "150px" }}
          >
            <button
              onClick={() =>
                alert(
                  `You clicked on ${item.name} (Collection ID: ${item.collectionId})`
                )
              }
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                padding: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginBottom: "10px",
                  transition: "transform 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealOptions;
