class Order < ApplicationRecord

  ## Relations
  has_many :order_items
  has_many :items, through: :order_items, source: :orderable, source_type: 'Item'
  has_many :deals, through: :order_items, source: :orderable, source_type: 'Deal'

  accepts_nested_attributes_for :order_items

  ## Callbacks
  before_save :set_uuid, unless: :uuid?


  ## Methods

  def orderables
    items + deals
  end

  private

  def set_uuid
    self.uuid = SecureRandom.uuid
  end

end
