import React, { useEffect, useState } from "react";
import { apiRequest } from "../../lib/fetch";
import { Deal, Item, OrderItem } from "../../lib/types";
import ProductCard from "./Card";

type ProductsProps = {
  onItemSelect: (orderItem: OrderItem) => void;
}

const Products: React.FC<ProductsProps> = ({ onItemSelect }) => {
  const [items, setItems] = useState<Item[] | null>(null);
  const [deals, setDeals] = useState<Deal[] | null>(null);

  useEffect(() => {
    // Fetch Items
    const fetchItems = async () => {
      try {
        const items = await apiRequest<Item[]>('/items');
        setItems(items);
      } catch (error) {
        console.error(error);
      }
    }

    // Fetch Deals
    const fetchDeals = async () => {
      try {
        const deals = await apiRequest<Deal[]>('/deals');
        setDeals(deals);
      } catch (error) {
        console.error(error);
      }
    }

    fetchItems();
    fetchDeals();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start">
      {deals && deals.map((deal, index) => (
        <ProductCard key={index} product={deal} onItemSelect={onItemSelect} />
      ))}
      {items && items.map((item, index) => (
        <ProductCard key={index} product={item} onItemSelect={onItemSelect} />
      ))}
    </div>
  );
}

export default Products;

