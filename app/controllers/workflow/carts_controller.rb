class Workflow::CartsController < ApplicationController
  
  def add
    @cart_size = 1
    
    render :layout => false
  end
  
end
