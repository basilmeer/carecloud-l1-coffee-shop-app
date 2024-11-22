import React, { useEffect, useState } from "react";
import { apiRequest } from "../../lib/fetch";
import { Item, OrderItem } from "../../lib/types";
import ProductCard from "./Card";

type ProductsProps = {
  onItemSelect: (orderItem: OrderItem) => void;
}

const Products: React.FC<ProductsProps> = ({ onItemSelect }) => {
  const [items, setItems] = useState<Item[] | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await apiRequest<Item[]>('/items');
        setItems(items);
      } catch (error) {
        console.error(error);
      }
    }

    fetchItems();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
      {items && items.map((item, index) => (
        <ProductCard key={index} item={item} onItemSelect={onItemSelect} />
      ))}
    </div>
  );
}

export default Products;

