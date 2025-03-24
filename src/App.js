import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import MealOptions from "./Components/MealOptions";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <MealOptions />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
