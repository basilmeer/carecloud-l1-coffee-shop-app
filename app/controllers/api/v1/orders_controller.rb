class Api::V1::OrdersController < ActionController::API
  def index
    render json: Jbuilder.new { |json| json.array! Order.all.order(id: :desc), :id, :uuid, :orderables }.target!
  end

  def create
    order = Order.new(permitted_params)

    if order.save
      render json: { message: 'Order saved successfully' }
    else
      render json: { message: order.errors.full_messages.to_sentence }, status: :unprocessable_entity
    end
  end

  private

  def permitted_params
    params.require(:order).permit(
      :customer_name,
      order_items_attributes: %i[orderable_id orderable_type quantity]
    )
  end
end
