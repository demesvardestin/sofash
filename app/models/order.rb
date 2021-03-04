class Order < ApplicationRecord
    belongs_to :item_owner
    belongs_to :renter
    has_one :inventory_item
    
    scope :completed, -> { where("STAGE == 2") }
    
    def item
        InventoryItem.find inventory_item_id
    end
    
    def days_requested(rental_end_=nil, rental_start_=nil)
        days = (Order.format_datetime(rental_end_ || rental_end) - Order.format_datetime(rental_start_ || rental_start)).to_i
        
        return days
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
    
    def within_reserved_dates?(start, end_)
        counter = 0
        
        item.reserved_dates.split(",").each do |d|
            if Order.format_datetime(start) == Order.format_datetime(d) || Order.format_datetime(end_) == Order.format_datetime(d)
                counter += 1
            end
        end
        
        return false if counter == 0
        return true
    end
    
    def requested_dates
        dates = ""
        start = format_datetime rental_start
        end_ = format_datetime rental_end
        interval = (end_ - start).to_i
        
        dates << start.strftime("%m/%d/%Y") + ","
        
        (interval-1).times.each do |i|
            new = start.to_datetime + 1
            dates << new.strftime("%m/%d/%Y") + ","
            start = new
        end
        
        dates << end_.strftime("%m/%d/%Y") + ","
        
        dates
    end
    
    def format_datetime(string)
        Order.format_datetime string
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
