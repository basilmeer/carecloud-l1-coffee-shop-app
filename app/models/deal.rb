class Deal < ApplicationRecord

  ## Relations
  has_many :deal_items
  has_many :items, through: :deal_items
  has_many :taxes, -> { distinct }, through: :items

  ## Methods
  def price_in_cents
    items.sum(:price_in_cents)
  end

end
