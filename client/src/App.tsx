import React, { useState } from 'react';
import Products from './components/Products';
import OrderSidebar from "./components/OrderSidebar";
import { OrderItem } from './lib/types';
import './App.css';

function App() {
  const [queuedItems, setQueuedItems] = useState<OrderItem[] | []>([]);

  // For updating addition/removal of items (or quantities there of)
  const onItemSelect = (newOrderItem: OrderItem) => {
    let clonedItems = [...queuedItems];
    let existingItem = clonedItems.find(orderItem => orderItem.item.id === newOrderItem.item.id);

    if (existingItem) {
      existingItem.item = newOrderItem.item;
      existingItem.quantity += newOrderItem.quantity;
    } else {
      clonedItems = [...clonedItems, newOrderItem];
    }

    setQueuedItems(clonedItems);
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
            <div className="border-l h-dvh px-4">
              <h1 className="text-3xl font-medium mb-8">Order</h1>
              <OrderSidebar orderItems={queuedItems} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
