class InventoryItem < ApplicationRecord
    has_one :image, dependent: :destroy
    has_many :item_orders
    
    after_create :initialize_image_attachment
    
    def self.search(parameter)
        where("item_name LIKE '%#{parameter}%' OR item_brand LIKE '%#{parameter}%' or item_description LIKE '%#{parameter}%'")
    end
        
    def slug
        item_name.split(" ").join("-")
    end
    
    def url
        "/item/#{id}/#{slug}"
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
        last 4
    end
    
    def condition
        ["Excellent", "Good", "Fair"][item_condition]
    end
    
    ## Pricing will be determined by consignor
    def rental_price
        (market_value.to_f * 0.10).round(2)
    end
    
    protected
    
        def initialize_image_attachment
            Image.create(inventory_item_id: self.id)
        end
end
