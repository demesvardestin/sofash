class RentersController < ApplicationController
  before_action :authenticate_renter!
  before_action :set_renter
  
  def feed
    @listings = InventoryItem.all.order("updated_at DESC").last 25 # to be edited later
  end
  
  def update
    @renter.update(renter_params)
    
    respond_to do |format|
      notice = if @renter.save
        "Your information has been updated!"
      else
        "An error occurred. Please try again."
      end
      
      format.html { redirect_to :back, notice: notice }
    end
  end
  
  private
  
  def set_renter
    @renter = current_renter
  end
  
  def renter_params
    params
    .require(:renter)
    .permit(
      :street_address,
      :city,
      :state,
      :zipcode)
  end
end
