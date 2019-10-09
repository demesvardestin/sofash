class Cart < ApplicationRecord
    has_many :item_orders
    validates_uniqueness_of :renter_email
    
    def size
        item_orders.length
    end
    
    def renter
        Renter.find_by(email: renter_email)
    end
end
