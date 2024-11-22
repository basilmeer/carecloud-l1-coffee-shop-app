import { OrderItem } from "./types";

export const calculateTotalTaxPerItem = (orderItem: OrderItem) => {
  const costInCents = orderItem.item.price_in_cents * orderItem.quantity;

  return orderItem
    .item
    .taxes
    .map(tax => (costInCents * tax.rate) / 100)
    .reduce((acc, curr) => acc + curr, 0);
};

export const calculateSubTotal = (orderItems: OrderItem[]) => {
  if (!orderItems) return 0;

  const baseCostsInCents = orderItems.map(oi =>
    (oi.item.price_in_cents * oi.quantity) +
    calculateTotalTaxPerItem(oi)
  );

  // Return the sum in dollars
  return baseCostsInCents.reduce((acc, curr) => acc + curr, 0) / 100;
};

export const calculateTotalTaxes = (orderItems: OrderItem[]) => {
  const perItemTaxes = orderItems.map(oi => calculateTotalTaxPerItem(oi));

  return perItemTaxes.reduce((acc, curr) => acc + curr, 0) / 100;
}

