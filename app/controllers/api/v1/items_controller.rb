class Api::V1::ItemsController < ActionController::API
  def index
    render json: Jbuilder.new { |json| json.array! Item.all, :id, :name, :price_in_cents, :quantity, :discount_rate, :taxes }.target!
  end
end
