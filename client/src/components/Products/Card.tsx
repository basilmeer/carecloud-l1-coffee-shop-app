import React from "react";
import { Item, OrderItem } from "../../lib/types";

type CardProps = {
  item: Item;
  onItemSelect: (orderItem: OrderItem) => void;
}

const ProductCard: React.FC<CardProps> = ({ item, onItemSelect }) => {
  const priceInDollars = item.price_in_cents / 100;
  const discountedPriceInDollars = ((item.price_in_cents * item.discount_rate) / 100) / 100;

  return (
    <div className="border rounded shadow-sm">
      <div className="relative">
        <div className="bg-zinc-200 h-28 w-full rounded-tl rounded-tr" />

        <label className="absolute top-0 right-0 p-2 bg-black text-white font-bold rounded">
          {item.discount_rate.toFixed()}% off
        </label>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-medium">{item.name}</h2>
        {item.discount_rate > 0 ?
          <div className="flex">
            <h5 className="text-lg text-slate-500 line-through">${priceInDollars.toFixed(2)}</h5>
            <h5 className="text-lg text-slate-700 font-semibold ml-2">${(priceInDollars - discountedPriceInDollars).toFixed(2)}</h5>
          </div>:
          <h5 className="text-lg text-slate-700 font-semibold">${priceInDollars.toFixed(2)}</h5>
        }
        <button 
          onClick={() => onItemSelect({ item, quantity: 1 })}
          className="w-full mt-4 text-center font-medium text-black bg-zinc-200 py-2 rounded transition-all duration-200 hover:bg-zinc-800 hover:text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
