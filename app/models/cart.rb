class Cart < ApplicationRecord
    has_one :item_order
    validates_uniqueness_of :renter_email
    
    def size
        item_order != nil ? 1 : 0
    end
    
    def renter
        Renter.find_by(email: renter_email)
    end
    
    def is_empty
        item_order == nil
    end
    
    def is_not_empty
        !is_empty
    end
end
