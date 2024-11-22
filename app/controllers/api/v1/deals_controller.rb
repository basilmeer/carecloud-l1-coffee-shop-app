class Api::V1::DealsController < ActionController::API
  def index
    render json: Jbuilder.new { |json| json.array! Deal.all, :id, :name, :discount_rate, :items, :taxes }.target!
  end
end

