class InventoryItem < ApplicationRecord
    has_one :image
    
    after_create :initialize_image_attachment
    
    def slug
        item_name.split(" ").join("-")[0..-2]
    end
    
    protected
    
        def initialize_image_attachment
            Image.create(inventory_item_id: self.id)
        end
end
