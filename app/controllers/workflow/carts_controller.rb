class Workflow::CartsController < ApplicationController
  
  def add
    @cart = initialize_cart_for
    
    render :layout => false
  end
  
end
