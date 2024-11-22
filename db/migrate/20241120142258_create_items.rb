class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.float :price, null: false, default: 0.0
      t.float :tax_rate, null: false, default: 0.0
      t.float :discount_rate, null: false, default: 0.0

      t.timestamps
    end
  end
end
