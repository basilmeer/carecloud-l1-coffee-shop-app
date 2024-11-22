import React from "react";
import { OrderItem } from "../../lib/types";
import { calculateTotalTaxes, calculateSubTotal } from "../../lib/calculators";
import ItemRow from "./ItemRow";

type OrderSidebarProps = {
  orderItems: OrderItem[] | null;
}

const OrderSidebar: React.FC<OrderSidebarProps> = ({ orderItems }) => {
  return (
    <div className={`flex flex-col ${!orderItems && 'justify-center items-center'} z-5`}>
      {!orderItems ?
        <span className="text-slate-400">No items present</span> :
        <React.Fragment>
          <div className="flex flex-col">
            {
              orderItems.map((orderItem, index) => (
                <React.Fragment key={index}>
                  <ItemRow key={index} orderItem={orderItem} />
                  <hr className="my-6" />
                </React.Fragment>
              ))
            }
          </div>

          <div>
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
        </React.Fragment>
      }
    </div>
  );
}

export default OrderSidebar;

