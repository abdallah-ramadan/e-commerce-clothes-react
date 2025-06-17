import React, { useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import Title from "../components/Title";
import SelectBox from "../components/SelectBox";
import ProductCard from "../components/ProductCard";
import { products } from "../assets/assets";
import Footer from "../components/Footer";

const Collections = () => {
  const [sortOption, setSortOption] = useState("relevant");
  const [filters, setFilters] = useState({
    category: [],
    type: [],
  });

  const handleFilterChange = (section, value) => {
    setFilters((prev) => {
      const current = prev[section];
      const isChecked = current.includes(value);
      return {
        ...prev,
        [section]: isChecked
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  // Filter products
  let filteredProducts = products.filter((product) => {
    const categoryMatch =
      filters.category.length === 0 || filters.category.includes(product.category);
    const typeMatch =
      filters.type.length === 0 || filters.type.includes(product.subCategory);
    return categoryMatch && typeMatch;
  });

  if (sortOption === "price-low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === "price-high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === "newest") {
    filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
  // else "all" — no sorting


  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-200">
        <FilterSidebar filters={filters} onChange={handleFilterChange} />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <div className="sm:text-2xl">
              <Title text1="All " text2="Collections" />
            </div>
            <SelectBox value={sortOption} onChange={(e) => setSortOption(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((ele) => (
              <ProductCard
                key={ele._id}
                id={ele._id}
                title={ele.name}
                image={ele.image}
                price={ele.price}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Collections;
