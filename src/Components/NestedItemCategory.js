import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import MenuItem from "./MenuItem";
import useToggle from "../hooks/useToggle";

const NestedItemCategory = ({ data, ResInfoData }) => {
  const { title, categories } = data;

  return (
    <div>
      <div className="2xl:w-6/12 mx-auto menu-container md:w-10/12 w-full px-3">
        <h2 className="text-lg font-bold p-2">{title}</h2>
        {categories?.map((subcategory) => {
          const [isOpen, toggle] = useToggle(true);

          return (
            <div key={subcategory?.title} className="w-full mx-auto">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-md inline-block">
                  {subcategory?.title} ({subcategory?.itemCards?.length})
                </h3>
                <button onClick={toggle} className="cursor-pointer">
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              <ul className="list-disc px-2 space-y-2">
                {subcategory?.itemCards?.map((item) => (
                  <MenuItem
                    key={item?.card?.info?.id}
                    menuInfo={item?.card?.info}
                    isOpen={isOpen}
                    ResInfoData={ResInfoData}
                  />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NestedItemCategory;
