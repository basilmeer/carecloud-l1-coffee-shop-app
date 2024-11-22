class CreateDeals < ActiveRecord::Migration[7.0]
  def change
    create_table :deals do |t|
      t.string :name
      t.float :discount_rate, null: false, default: 0.0

      t.timestamps
    end
  end
end
