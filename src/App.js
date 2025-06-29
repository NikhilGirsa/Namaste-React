import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import SpecificRestaurants from "./Components/SpecificRestaurants";
import RestaurantMenu from "./Components/RestaurantMenu";
import Cart from "./Components/Cart";
import store from "./utils/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_CLIENT_ID } from "./utils/constants";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/menu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/details/:collectionId",
        element: <SpecificRestaurants />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
