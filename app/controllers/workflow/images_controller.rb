class Workflow::ImagesController < ApplicationController
  before_action :set_image, only: [:update, :edit]
  
  def new
    @image = Image.new
    @item = InventoryItem.find(params[:id])
  end
  
  def update
    @image.update(image_params)
    
    respond_to do |format|
      if @image.save
        format.html { redirect_to @image.inventory_item, notice: "Image list updated!" }
      else
        format.html { render :edit, notice: "An error occurred, please try again" }
      end
    end
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
  
  def set_image
    @image = Image.find(params[:id])
  end
    
  def image_params
    params.require(:image)
    .permit(
      :inventory_item_id,
      { sources: [] }
      )
  end
  
end
