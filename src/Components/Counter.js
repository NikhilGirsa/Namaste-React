import { useState } from "react";
import AddOn from "./AddOn";

const Counter = ({ addOn, name, price }) => {
  const [count, setCount] = useState(0);
  const [showAddOn, setShowAddOn] = useState(false);

  const handleAdd = () => {
    if (addOn) {
      setShowAddOn(true);
    } else {
      setCount(1);
    }
  };

  const handleIncrement = () => setCount((prev) => prev + 1);
  const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const handleClose = () => setShowAddOn(false);

  return (
    <>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 z-10">
        <div className="bg-white rounded-full shadow flex items-center justify-center py-1 text-green-600 font-semibold text-sm">
          {count === 0 ? (
            <button
              onClick={handleAdd}
              className="w-full px-4 py-1 active:scale-95 transition-transform cursor-pointer"
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center justify-between w-full px-2">
              <button onClick={handleDecrement} className="cursor-pointer">
                -
              </button>
              <span>{count}</span>
              <button onClick={handleIncrement} className="cursor-pointer">
                +
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal Implementation */}
      {showAddOn && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 backdrop-blur-sm bg-white/10 z-[999]"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[1000] pointer-events-none">
            <div
              className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto mx-4 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                >
                  &times;
                </button>

                <AddOn data={addOn} name={name} price={price} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Counter;
