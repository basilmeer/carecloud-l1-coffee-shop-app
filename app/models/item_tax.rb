class ItemTax < ApplicationRecord
  belongs_to :item
  belongs_to :tax
end
