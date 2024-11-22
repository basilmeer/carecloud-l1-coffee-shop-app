class RemoveTaxRateFromItems < ActiveRecord::Migration[7.0]
  def change
    remove_column :items, :tax_rate, :float
  end
end
