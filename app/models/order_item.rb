class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :orderable, polymorphic: true # Could be a singular 'Item' or could be a 'Deal'
end
