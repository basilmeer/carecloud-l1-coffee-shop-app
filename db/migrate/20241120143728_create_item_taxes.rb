class CreateItemTaxes < ActiveRecord::Migration[7.0]
  def change
    create_table :item_taxes do |t|
      t.references :item, null: false, foreign_key: true
      t.references :tax, null: false, foreign_key: true

      t.timestamps
    end
  end
end
