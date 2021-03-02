class Order < ApplicationRecord
    belongs_to :item_owner
    belongs_to :renter
    has_one :inventory_item
    
    # def price
    #     start = rental_start.split.to
    #     end_ = rental_end
        
        
    # end
    
    def item
        InventoryItem.find inventory_item_id
    end
    
    def days_requested
        return (Order.format_datetime(rental_end) - Order.format_datetime(rental_start)).to_i
    end
    
    def calculated_price
        item.rental_price * days_requested
    end
    
    def calculated_service_fee
        calculated_price * 0.1
    end
    
    def calculated_tax
        (calculated_price + calculated_service_fee) * 0.05
    end
    
    def total
        calculated_price + calculated_service_fee + calculated_tax
    end
    
    def self.format_datetime(string)
        arr = string.split("/")
        month = arr[0]
        day = arr[1]
        
        arr[0] = day
        arr[1] = month
        
        return arr.join("/").to_datetime
    end
end
