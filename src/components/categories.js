import { useState, useEffect } from "react";
import categoryData from "../api/categories.json";
import Category from "./ui/Category";
import Title from "./ui/Title";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
          {!categories.length ? (
            <p>Yükleniyor...</p>
          ) : (
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
