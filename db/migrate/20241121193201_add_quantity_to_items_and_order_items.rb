class AddQuantityToItemsAndOrderItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :quantity, :integer, null: false, default: 0
    add_column :order_items, :quantity, :integer, null: false, default: 0
  end
end
