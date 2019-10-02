class InventoryItems::InventoryItemsController < ApplicationController
    before_action :set_item
    
    private
    
    def set_item
        id = params[:slug].split("-")[0]
        @item = InventoryItem.find_by(id: id)
    end
end
