import React from "react";
import { OrderItem, Deal } from "../../lib/types";

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
            <span className="text-sm ml-2"> x {orderItem.quantity}</span>
          </h5>
          <h5 className="text-lg font-semibold">
            ${(itemPriceInDollars * orderItem.quantity).toFixed(2)}
          </h5>
        </div>

        {'items' in orderItem.item && !!orderItem.item.items.length ?
            <div className="mb-2">
              {
                orderItem.item.items.map(dealItem =>
                  <p className="text-zinc-700 text-sm">{dealItem.name} x 1</p>
                )
              }
            </div>
        :
          <></>
        }

        <div className="flex flex-col">
          {orderItem.item.taxes.map((tax, index) =>
            <div key={index} className="flex items-center justify-between">
              <p className="text-zinc-500 text-sm">{tax.name} ({tax.rate.toFixed(1)}%)</p>
              <p className="text-zinc-500 text-sm">${((itemPriceInDollars * tax.rate) * orderItem.quantity / 100).toFixed(2)}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default ItemRow;

