class RentersController < ApplicationController
  before_action :authenticate_renter!
  
  def feed
    @listings = InventoryItem.all.order("updated_at DESC").last 25 # to be edited later
  end
end
