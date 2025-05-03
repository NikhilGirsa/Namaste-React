import { useState } from "react";

const AddOn = ({ data, name, price }) => {
  if (!data || !Array.isArray(data)) return null;

  const [selections, setSelections] = useState({});
  const [expandedGroups, setExpandedGroups] = useState({});
  const basePrice = (price || 0) / 100;

  const handleChange = (groupIndex, choiceId, isSingle) => {
    setSelections((prev) => {
      const currentGroup = prev[groupIndex] || [];
      return {
        ...prev,
        [groupIndex]: isSingle
          ? [choiceId]
          : currentGroup.includes(choiceId)
          ? currentGroup.filter((id) => id !== choiceId)
          : [...currentGroup, choiceId],
      };
    });
  };

  const toggleExpand = (groupIndex) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupIndex]: !prev[groupIndex],
    }));
  };

  const addOnData = data.map((item) => ({
    choices: (item?.choices || []).map((choice) => ({
      id: choice?.id,
      name: choice?.name,
      priceCh: (choice?.price || 0) / 100,
    })),
    groupName: item?.groupName || "Add-ons",
    maxAddons: item?.maxAddons ?? null,
  }));

  const getTotalPrice = () => {
    return addOnData.reduce((total, group, idx) => {
      const selectedIds = selections[idx] || [];
      const selectedTotal = group.choices
        .filter((c) => selectedIds.includes(c.id))
        .reduce((sum, item) => sum + item.priceCh, 0);
      return total + selectedTotal;
    }, basePrice);
  };

  return (
    <div className="space-y-6 px-4 py-4">
      <p className="text-sm text-gray-500">
        {name} · ₹{basePrice.toFixed(2)}
      </p>

      {addOnData.map((group, idx) => {
        const isSingle = group.maxAddons === 1;
        const selectedCount = selections[idx]?.length || 0;
        const showAll = expandedGroups[idx];
        const visibleChoices = showAll
          ? group.choices
          : group.choices.slice(0, 5);

        return (
          <div
            key={idx}
            className="bg-gray-100 rounded-xl p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold text-gray-800">
                {group.groupName}
              </h3>
              {group.maxAddons && (
                <span className="text-xs text-gray-500">
                  ({selectedCount}/{group.maxAddons})
                </span>
              )}
            </div>

            <div className="space-y-2">
              {visibleChoices.map((choice) => {
                const selected = selections[idx]?.includes(choice.id);
                return (
                  <label
                    key={choice.id}
                    className="flex justify-between items-center bg-white px-3 py-2 rounded-md border border-gray-300"
                  >
                    <span className="text-sm text-gray-800">{choice.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">
                        + ₹{choice.priceCh.toFixed(2)}
                      </span>
                      <input
                        type={isSingle ? "radio" : "checkbox"}
                        checked={selected}
                        onChange={() => handleChange(idx, choice.id, isSingle)}
                        className="accent-orange-600 w-4 h-4"
                      />
                    </div>
                  </label>
                );
              })}

              {group.choices.length > 5 && (
                <button
                  className="text-sm cursor-pointer"
                  onClick={() => toggleExpand(idx)}
                >
                  {showAll ? "" : `+ ${group.choices.length - 5} more`}
                </button>
              )}
            </div>
          </div>
        );
      })}

      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <p className="text-lg font-semibold">₹{getTotalPrice().toFixed(2)}</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
          Add Item to cart
        </button>
      </div>
    </div>
  );
};

export default AddOn;
