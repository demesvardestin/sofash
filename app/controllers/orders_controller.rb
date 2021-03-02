class OrdersController < ApplicationController
  before_action :authenticate_renter!
  before_action :set_item, except: :update
  before_action :set_order, only: :update
  before_action :verify_permission
  
  def index
  end
  
  def checkout
    @order = Order.find_or_create_by(inventory_item_id: @item.id, renter_id: current_renter.id, item_owner_id: @item.lister.id)
  end
  
  def update
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
      :rental_end
      )
  end
  
  def verify_permission
    
  end
end
