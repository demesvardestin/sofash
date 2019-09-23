class PickupRequestItem < ApplicationRecord
    belongs_to :pickup_request, dependent: :destroy
    belongs_to :item_category
end
