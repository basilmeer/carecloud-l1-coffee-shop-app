class RenamePriceToPriceInCentsInItems < ActiveRecord::Migration[7.0]
  def change
    rename_column :items, :price, :price_in_cents
  end
end
