class ItemOwners::PickupRequestItemsController < ApplicationController
    
    def create
        @pri = PickupRequestItem.new(pickup_request_items_params)
        @pri.save!
        
        redirect_to :back, notice: "Item added!"
    end
    
    private
    
    def pickup_request_items_params
        params.require(:pickup_request_item)
        .permit(
          :item_name,
          :item_brand,
          :item_description,
          :item_condition,
          :pickup_request_id
          )
    end
    
end