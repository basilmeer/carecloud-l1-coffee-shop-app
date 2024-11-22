class Item < ApplicationRecord

  ## Relations
  has_many :deal_items
  has_many :deals, through: :deal_items
  has_many :item_taxes
  has_many :taxes, through: :item_taxes

  ## Methods

  def discounted_price

  end

  def taxed_price
  end

end
