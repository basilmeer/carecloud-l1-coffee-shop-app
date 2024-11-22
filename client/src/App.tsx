import React, { useState } from 'react';
import { useNavigate } from "react-router";
import Products from './components/Products';
import OrderSidebar from "./components/OrderSidebar";
import { Order, OrderItem } from './lib/types';
import './App.css';
import { apiRequest } from './lib/fetch';

function App() {
  const [queuedItems, setQueuedItems] = useState<OrderItem[] | []>([]);
  const [customerName, setCustomerName] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  // For updating addition/removal of items (or quantities there of)
  const onItemSelect = (newOrderItem: OrderItem) => {
    let clonedItems = [...queuedItems];
    let existingItem = clonedItems.find(orderItem => orderItem.item.id === newOrderItem.item.id);

    if (existingItem) {
      if (newOrderItem.quantity === 0)
      existingItem.item = newOrderItem.item;
      existingItem.quantity += newOrderItem.quantity;
    } else {
      clonedItems = [...clonedItems, newOrderItem];
    }

    setQueuedItems(clonedItems);
  }

  const onCheckout = async () => {
    setIsProcessing(true);

    // Note: Adding this timeout to showcase the form acting appropriately when processing
    //       submission and to highlight what happens prior to the redirect since the actual submission
    //       (being so barebones) is very quick
    setTimeout(async () => {
      try {
        await apiRequest<Order>("/orders", {
          method: "POST",
          body: JSON.stringify({
            customer_name: customerName,
            order_items_attributes: queuedItems.map(orderItem => ({
              orderable_id: orderItem.item.id,
              orderable_type: "Item", // hard coding for now, to be swapped for Deal later
              quantity: orderItem.quantity,
            }))
          })
        });

        setIsProcessing(false);
        navigate("/confirmation");
      } catch (error) {
        console.error(error);
        setIsProcessing(false);
      }
    }, 2000);
  }

  return (
    <React.Fragment>
      <header className="text-white bg-stone-900 fixed w-full z-50">
        <h1 className="text-3xl px-20 py-4 border-b font-medium">
          Coffee Shop POS
        </h1>
      </header>

      <div className="pt-24">
        <div className="w-full grid grid-cols-12 gap-3">

          <div className="col-span-7 pl-20">
            <h1 className="text-3xl font-medium mb-8">Products</h1>
            <Products onItemSelect={onItemSelect} />
          </div>

          <div className="col-start-10 col-span-3 relative">
            <div className="border-l h-[95dvh] px-4 pt-6 pb-10 fixed top-16 w-[24.8%] flex flex-col">
              <h1 className="text-3xl font-medium mb-8">Order</h1>
              <OrderSidebar orderItems={queuedItems} onItemUpdate={onItemSelect} />

              <hr className="my-6" />

              <label htmlFor="customer-name" className="text-sm uppercase font-medium">Customer Name</label>
              <input
                id="customer-name"
                type="text"
                className="w-full border rounded px-4 py-2" 
                value={customerName as string}
                onChange={(e) => setCustomerName(e.target.value)}
              />

              <button
                className="flex justify-center items-center w-full bg-black text-white font-bold text-xl rounded p-3 mt-5 shadow-sm transition duration-200 hover:text-zinc-300 disabled:bg-gray-400"
                onClick={onCheckout}
                disabled={isProcessing || !queuedItems.length}
              >
                {isProcessing ? "Processing..." : "Checkout"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
