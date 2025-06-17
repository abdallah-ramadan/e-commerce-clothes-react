import React from "react";

const FilterSidebar = ({ filters, onChange }) => {
  const handleCheckboxChange = (section, value) => {
    onChange(section, value);
  };

  const renderCheckboxGroup = (title, section, options) => (
    <div className="mb-6 border border-gray-200 p-4">
      <h3 className="text-sm font-bold text-gray-700 mb-2 uppercase">{title}</h3>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <label key={opt} className="flex items-center space-x-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={filters[section]?.includes(opt)}
              onChange={() => handleCheckboxChange(section, opt)}
              className="accent-black"
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full md:w-60">
      <h2 className="my-4 text-xl flex items-center cursor-pointer gap-2 uppercase">Filters</h2>
      {renderCheckboxGroup("Categories", "category", ["Men", "Women", "Kids"])}
      {renderCheckboxGroup("Type", "type", ["Topwear", "Bottomwear", "Winterwear"])}
    </div>
  );
};

export default FilterSidebar;
