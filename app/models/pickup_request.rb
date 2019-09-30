class PickupRequest < ApplicationRecord
    belongs_to :item_owner
    has_many :pickup_request_items, dependent: :destroy
    
    before_create :generate_token
    
    module RandomToken
        def self.random(len=28, character_set = ["A".."Z", "a".."z", "0".."9"])
            chars = character_set.map{|x| x.is_a?(Range) ? x.to_a : x }.flatten
            Array.new(len){ chars.sample }.join
        end
    end
    
    def item_count
        pickup_request_items.length
    end
    
    def has_no_items
        item_count == 0
    end
    
    protected
    
    def generate_token
        token = RandomToken.random(8)
        
        until !PickupRequest.exists?(confirmation_token: token)
          generate_token
        end
        
        self.confirmation_token = token
    end
end
