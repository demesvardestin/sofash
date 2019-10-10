class Workflow::CartsController < ApplicationController
  before_action :set_cart
  
  def add
    @order = ItemOrder.create(cart_id: @cart.id, inventory_item_id: params[:item_id])
    
    render :layout => false
  end
  
  private
  
  def set_cart
    @cart = find_or_initialize_cart_for(current_or_guest_renter)
  end
  
  def find_or_initialize_cart_for(renter)
    cart = Cart.find_by(renter_email: renter.email, checked_out: false)
    
    if cart.nil?
      cart = Cart.create(renter_email: renter.email)
    end
    
    return cart
  end
  
end
