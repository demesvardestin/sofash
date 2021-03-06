class OrdersController < ApplicationController
  before_action :authenticate_renter!
  before_action :set_item, except: :update
  before_action :set_order, only: :update
  before_action :verify_permission
  
  def index
  end
  
  def checkout
    @order = Order.find_or_create_by(
      inventory_item_id: @item.id,
      renter_id: current_renter.id,
      item_owner_id: @item.lister.id,
      stage: 0,
      rental_start: DateTime.now().strftime("%m/%d/%Y"),
      rental_end: (DateTime.now() + 2).strftime("%m/%d/%Y")
    )
  end
  
  def update
    start = params[:order][:rental_start]
    end_ = params[:order][:rental_end]
    
    days = @order.days_requested(end_, start)
    
    if days <= 1
      @notice = "The rental period must be more than 1 day"
      return render "no_update", :layout => false
    elsif @order.within_reserved_dates? start, end_
      @notice = "This interval is not available"
      return render "no_update", :layout => false
    end
    
    @order.update(order_params)
    
    respond_to do |format|
      format.js { render "update", :layout => false }
    end
  end
  
  private
  
  def set_item
    @item = InventoryItem.find(params[:id])
  end
  
  def set_order
    @order = Order.find(params[:id])
  end
  
  def order_params
    params
    .require(:order)
    .permit(
      :rental_start,
      :rental_end,
      :pickup_location_address,
      :pickup_location_id,
      :pickup_location_name
      )
  end
  
  def verify_permission
    
  end
end
