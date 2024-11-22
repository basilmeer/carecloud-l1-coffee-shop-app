class CreateDealItems < ActiveRecord::Migration[7.0]
  def change
    create_table :deal_items do |t|
      t.references :deal, null: false, foreign_key: true
      t.references :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
