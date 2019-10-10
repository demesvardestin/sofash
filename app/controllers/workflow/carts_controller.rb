class Workflow::CartsController < ApplicationController
  before_action :set_cart
  before_action :cart_empty?, only: :checkout
  
  def add
    @order = ItemOrder.create(cart_id: @cart.id, inventory_item_id: params[:item_id])
    
    render :layout => false
  end
  
  def remove
    @order = ItemOrder.find(params[:order_id])
    
    if @cart.item_orders.include?(@order)
      @order.destroy
    end
    
    render :reload
  end
  
  def checkout
    
  end
  
  def reload
    render :layout => false
  end
  
  private
  
  def set_cart
    @cart = find_or_initialize_cart_for(current_or_guest_renter)
  end
  
  def cart_empty?
    redirect_to cart_path if @cart.is_empty
  end
  
  def find_or_initialize_cart_for(renter)
    cart = Cart.find_by(renter_email: renter.email, checked_out: false)
    
    if cart.nil?
      cart = Cart.create(renter_email: renter.email)
    end
    
    return cart
  end
  
end
