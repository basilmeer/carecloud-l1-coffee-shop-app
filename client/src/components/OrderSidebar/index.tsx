import React from "react";
import { OrderItem } from "../../lib/types";
import { calculateTotalTaxes, calculateSubTotal } from "../../lib/calculators";
import ItemRow from "./ItemRow";

type OrderSidebarProps = {
  orderItems: OrderItem[] | [];
  onItemUpdate: (orderItem: OrderItem) => void;
}

const OrderSidebar: React.FC<OrderSidebarProps> = ({ orderItems, onItemUpdate }) => {
  return (
    <div className="flex flex-col z-5 h-[inherit]">
      <div className="max-h-[900px]">
        {!orderItems.length ?
          <span className="text-slate-400">No items present</span> :
          <React.Fragment>
            <div className="flex flex-col max-h-full overflow-y-auto">
              {
                orderItems.map((orderItem, index) => (
                  <React.Fragment key={index}>
                    <ItemRow key={index} orderItem={orderItem} onItemUpdate={onItemUpdate} />
                    <hr className="my-6" />
                  </React.Fragment>
                ))
              }
            </div>
          </React.Fragment>
        }
      </div>

      <div className="mt-auto">
        <div className="flex justify-between items-center font-medium">
          <p>Subtotal</p> <p>${calculateSubTotal(orderItems).toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center font-medium">
          <p>Taxes</p> <p>${calculateTotalTaxes(orderItems).toFixed(2)}</p>
        </div>

        <hr className="my-6" />

        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">Total</p> 
          <p className="text-2xl font-bold">${(calculateSubTotal(orderItems) + calculateTotalTaxes(orderItems)).toFixed(2)}</p>
        </div>

      </div>
    </div>
  );
}

export default OrderSidebar;

