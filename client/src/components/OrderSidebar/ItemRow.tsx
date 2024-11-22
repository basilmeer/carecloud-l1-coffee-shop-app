import React from "react";
import { OrderItem } from "../../lib/types";

type ItemRowProps = {
  orderItem: OrderItem;
}

const ItemRow: React.FC<ItemRowProps> = ({ orderItem }) => {
  const itemPriceInDollars = orderItem.item.price_in_cents / 100;

  return (
    <div className="flex gap-3">
      <div className="w-full">
        <div className="flex justify-between">
          <h5 className="text-lg font-medium">
            {orderItem.item.name}
          </h5>
          <h5 className="text-lg font-semibold">
            ${(itemPriceInDollars * orderItem.quantity).toFixed(2)}
          </h5>
        </div>

        <div className="flex flex-col">
          {orderItem.item.taxes.map((tax, index) =>
            <div key={index} className="flex items-center justify-between">
              <p className="text-zinc-500 text-sm">{tax.name} ({tax.rate.toFixed(1)}%)</p>
              <p className="text-zinc-500 text-sm">${((itemPriceInDollars * tax.rate) * orderItem.quantity / 100).toFixed(2)}</p>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-3 mt-2">
          <button className="font-medium text-black h-6 w-6 flex items-center justify-center bg-zinc-200 rounded transition-all duration-200 hover:bg-zinc-800 hover:text-white">
            -
          </button>
          <span className="text-sm">{orderItem.quantity}</span>
          <button className="font-medium text-black h-6 w-6 flex items-center justify-center bg-zinc-200 rounded transition-all duration-200 hover:bg-zinc-800 hover:text-white">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemRow;


