export type Tax = {
  name: string;
  rate: number;
}

export type Item = {
  id: number;
  name: string;
  price_in_cents: number;
  discount_rate: number;
  quantity: number;
  taxes: Tax[];
}

export type Order = {
  customer_name: string;
  order_items_attributes: {
    orderable_id: number;
    orderable_type: string;
    quantity: number;
  }[]
}

export type OrderItem = {
  item: Item;
  quantity: number;
}
