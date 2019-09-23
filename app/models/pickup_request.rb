class PickupRequest < ApplicationRecord
    belongs_to :item_owner, dependent: :destroy
    has_many :pickup_request_items
end
