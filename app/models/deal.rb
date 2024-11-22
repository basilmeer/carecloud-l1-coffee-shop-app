class Deal < ApplicationRecord
  has_many :deal_items
  has_many :items, through: :deal_items
  has_many :taxes, -> { distinct }, through: :items
end
