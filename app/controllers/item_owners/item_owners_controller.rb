class ItemOwners::ItemOwnersController < ApplicationController
  before_action :set_io
  before_action :authenticate_item_owner!
  
  def dashboard; end
  
  def initialize_prf
    @pr = PickupRequest.create(
      description: "new pickup request for io #{@io.id}",
      item_owner_id: @io.id
      )
    redirect_to request_pickup_path(:pickup_request_id => @pr.id)
  end
  
  def request_pickup
    @pri = PickupRequestItem.new
    @pr = PickupRequest.find(params[:pickup_request_id])
  end
  
  def submit_pickup_request_items
    @pri = PickupRequestItem.new(pickup_request_items_params)
  end
  
  def update
    @io.update(item_owners_params)
    
    respond_to do |format|
      if @io.save
        format.html { redirect_to io_dashboard_path, notice: "Profile details updated!" }
      else
        render :edit
      end
    end
  end
  
  private
  
  def set_io
    @io = current_item_owner
  end
  
  def item_owners_params
    params.require(:item_owner)
    .permit(
      :first_name,
      :last_name,
      :street_address,
      :city,
      :state,
      :zipcode
      )
  end
  
  def pickup_request_items_params
    params.require(:item_owner)
    .permit(
      :item_name,
      :item_brand,
      :item_description,
      :item_condition,
      :pickup_request_id
      )
  end
end
