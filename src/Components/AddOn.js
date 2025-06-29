// Updated AddOn Component
import { useState } from "react";

const AddOn = ({ data, name, price, onClose, onSubmit }) => {
  if (!data || !Array.isArray(data)) return null;

  const [selections, setSelections] = useState({});
  const [expandedGroups, setExpandedGroups] = useState({});
  const basePrice = (price || 0) / 100;

  const handleChange = (groupIndex, choiceId, isSingle) => {
    setSelections((prev) => {
      const current = prev[groupIndex] || [];
      return {
        ...prev,
        [groupIndex]: isSingle
          ? [choiceId]
          : current.includes(choiceId)
          ? current.filter((id) => id !== choiceId)
          : [...current, choiceId],
      };
    });
  };

  const toggleExpanded = (groupIndex) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupIndex]: !prev[groupIndex],
    }));
  };

  const addOnData = data.map((group) => ({
    groupName: group?.groupName || "Customizations",
    maxAddons: group?.maxAddons || 1,
    choices: group.choices.map((c) => ({
      id: c.id,
      name: c.name,
      price: (c.price || 0) / 100,
    })),
  }));

  const getTotalPrice = () => {
    let total = basePrice;
    Object.entries(selections).forEach(([groupIndex, selectedIds]) => {
      const group = addOnData[groupIndex];
      selectedIds.forEach((id) => {
        const found = group.choices.find((c) => c.id === id);
        if (found) total += found.price;
      });
    });
    return total.toFixed(2);
  };

  const handleItemAdd = () => {
    const selectedAddOns = Object.entries(selections).flatMap(
      ([groupIdx, selectedIds]) => {
        const group = addOnData[groupIdx];
        return group.choices.filter((choice) =>
          selectedIds.includes(choice.id)
        );
      }
    );

    const itemData = {
      name,
      customAddOn: selectedAddOns,
      price: parseFloat(getTotalPrice()),
      isVeg: selectedAddOns.every((a) => a.veg), // ✅ determine isVeg here if not passed in props
    };

    onSubmit(itemData); // or dispatch here directly if not going through onSubmit
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent"
      onClick={onClose}
    >
      <div
        className="max-w-md w-full mx-4 bg-white rounded-xl shadow-lg p-4 space-y-6 border border-gray-200 relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
          aria-label="Close"
        >
          &times;
        </button>

        <div className="text-left border-b pb-2">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-500 text-sm">Customise as per your taste</p>
        </div>

        {addOnData.map((group, idx) => {
          const isSingle = group.maxAddons === 1;
          const selectedCount = selections[idx]?.length || 0;
          const expanded = expandedGroups[idx] || false;
          const visibleChoices = expanded
            ? group.choices
            : group.choices.slice(0, 5);
          const hiddenCount = group.choices.length - 5;

          return (
            <div key={idx} className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-gray-800">
                  {group.groupName}
                </p>
                <span className="text-sm text-gray-500">
                  ({selectedCount}/{group.maxAddons})
                </span>
              </div>

              <div className="space-y-2">
                {visibleChoices.map((choice) => {
                  const selected = selections[idx]?.includes(choice.id);
                  return (
                    <label
                      key={choice.id}
                      className={`flex justify-between items-center px-4 py-2 border rounded-md ${
                        selected
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      <span className="text-sm text-gray-800">
                        {choice.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">
                          + ₹{choice.price.toFixed(2)}
                        </span>
                        <input
                          type={isSingle ? "radio" : "checkbox"}
                          checked={selected}
                          onChange={() =>
                            handleChange(idx, choice.id, isSingle)
                          }
                          className="accent-green-600 w-4 h-4"
                        />
                      </div>
                    </label>
                  );
                })}

                {!expanded && hiddenCount > 0 && (
                  <button
                    onClick={() => toggleExpanded(idx)}
                    className="text-green-600 text-sm underline pl-2"
                  >
                    +{hiddenCount} more
                  </button>
                )}
              </div>
            </div>
          );
        })}

        <div className="flex justify-between items-center pt-4 border-t">
          <p className="text-lg font-semibold text-gray-900">
            ₹{getTotalPrice()}
          </p>
          <button
            onClick={handleItemAdd}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition cursor-pointer"
          >
            Add Item to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOn;
