import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { useState } from "react";

const ItemCategory = ({ data }) => {
  const { title, itemCards } = data;
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div>
      <div className="2xl:w-6/12 mx-auto menu-container md:w-10/12 w-full px-3">
        <div className="flex items-center justify-between p-5">
          <h2 className="text-lg font-bold border-black rounded-lg">
            {title} ({itemCards?.length})
          </h2>
          <button className="cursor-pointer" onClick={handleToggle}>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
        <ul className="list-disc px-2 space-y-2">
          {itemCards?.map((item) => (
            <MenuItem
              key={item?.card?.info?.id}
              menuInfo={item?.card?.info}
              isOpen={isOpen}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemCategory;
