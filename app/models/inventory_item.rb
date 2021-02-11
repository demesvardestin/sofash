class InventoryItem < ApplicationRecord
    has_one :image, dependent: :destroy
    belongs_to :item_owner
    
    scope :sort_by_date, -> { order("updated_at DESC") }
    
    
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
        20.0
    end
    
    def rental_costs
        "$#{rental_price} for 4 days"
    end
    
    def lister
        item_owner
    end
    
    protected
end
