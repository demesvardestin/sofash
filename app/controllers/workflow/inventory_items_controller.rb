class Workflow::InventoryItemsController < ApplicationController
    before_action :set_item, except: [:new, :create]
    
    def search
        @query = params[:query]
        
        @items = if @query.empty?
            []
        else
            InventoryItem.search(@query)
        end
        
        @snapshot_items = @items.take 5
        
        render :layout => false
    end
    
    def new
        @item = InventoryItem.new
    end
    
    def create
        @item = InventoryItem.new(item_params)
        
        respond_to do |format|
            if @item.save
                format.html { redirect_to attach_images_path(:id => @item.id),
                            notice: "Item created! Add image(s)" }
            else
                format.html { render :new,
                                notice: "An error occurred, please try again" }
            end
        end
    end
    
    private
    
        def item_params
            params.require(:inventory_item)
            .permit(
                :item_name,
                :item_brand,
                :item_description,
                :item_condition,
                :market_value,
                :in_stock,
                :item_owner_id
                )
        end
    
        def set_item
            @item = InventoryItem.find_by(id: params[:id])
        end
end
