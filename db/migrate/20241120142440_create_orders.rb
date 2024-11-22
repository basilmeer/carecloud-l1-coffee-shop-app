class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :customer_name
      t.string :uuid, null: false

      t.timestamps
    end
  end
end
