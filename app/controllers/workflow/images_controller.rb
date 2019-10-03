class Workflow::ImagesController < ApplicationController
  
  def new
    @image = Image.new
    @item = InventoryItem.find(params[:id])
  end
  
  def create
    @image = Image.new(image_params)
    
    respond_to do |format|
      if @image.save
        format.html { redirect_to @image.inventory_item, notice:"Item added to inventory!" }
      else
        format.html { render :new, notice: "An error occurred, please try again" }
      end
    end
  end
  
  private
    
    def image_params
      params.require(:image)
      .permit(
        :sources,
        :inventory_item_id
        )
    end
  
end
