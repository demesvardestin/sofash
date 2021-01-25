class ItemOwners::ItemOwnersController < ApplicationController
  before_action :set_io
  before_action :authenticate_item_owner!
  
  def dashboard; end
  
  def update
    if params[:registration_completed].present?
      params[:registration_completed] = true
    end
    
    @io.update(item_owners_params)
    
    respond_to do |format|
      if @io.save
        format.html do
          if params[:next]
            redirect_to params[:next], notice: "Profile details updated!"
          else
            redirect_to io_dashboard_path, notice: "Profile details updated!"
          end
        end
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
      :zipcode,
      :registration_completed
      )
  end
end
