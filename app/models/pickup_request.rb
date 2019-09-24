class PickupRequest < ApplicationRecord
    belongs_to :item_owner
    has_many :pickup_request_items, dependent: :destroy
    
    def item_count
        pickup_request_items.length
    end
    
    
end
