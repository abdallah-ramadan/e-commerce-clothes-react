import React from "react";

const SelectBox = ({ value, onChange }) => {
  return (
    <div className="flex justify-end mb-4">
      <select
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      >
        <option value="all">Sort by: All</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="newest">Newest Arrivals</option>
      </select>
    </div>
  );
};

export default SelectBox;
