class InventoryItem < ApplicationRecord
    has_one :image, dependent: :destroy
    belongs_to :item_owner
    has_many :listing_reports
    
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
    
    def rental_price
        20
    end
    
    def lister
        item_owner
    end
    
    def tags_as_list
        tags.split(",") 
    end
    
    def colors_as_list
        colors.split(",")
    end
    
    def link
        "qlozet.co/l/#{id}"
    end
    
    protected
end
