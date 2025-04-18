import { RESTAURANT_MENU_IMAGE_URL } from "../utils/constants";

const MenuItem = ({ menuInfo, isOpen }) => {
  const { name, price, defaultPrice, description, imageId } = menuInfo;

  return (
    isOpen && (
      <li className="list-none flex justify-center w-full">
        <div className="flex flex-row items-center w-full bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="flex-1 pr-4">
            <h4 className="text-lg font-semibold mb-2">{name}</h4>

            {price && (
              <span className="block text-gray-700">
                ₹ {(price / 100)?.toFixed(2)}
              </span>
            )}
            {defaultPrice && !price && (
              <span className="block text-gray-700">
                ₹ {(defaultPrice / 100)?.toFixed(2)}
              </span>
            )}

            {description && <p className="text-gray-600 mt-2">{description}</p>}
          </div>

          {imageId && (
            <div className="w-32 h-32 flex-shrink-0">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={RESTAURANT_MENU_IMAGE_URL + imageId}
                alt={name}
              />
            </div>
          )}
        </div>
      </li>
    )
  );
};

export default MenuItem;
