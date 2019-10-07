class InventoryItem < ApplicationRecord
    has_one :image, dependent: :destroy
    
    after_create :initialize_image_attachment
    
    def slug
        item_name.split(" ").join("-")[0..-2]
    end
    
    def availability
        case in_stock
        when true
            "in stock"
        else
            "out of stock"
        end
    end
    
    def self.latest_arrivals
        last 8
    end
    
    protected
    
        def initialize_image_attachment
            Image.create(inventory_item_id: self.id)
        end
end
