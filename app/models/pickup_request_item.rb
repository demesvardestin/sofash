class PickupRequestItem < ApplicationRecord
    belongs_to :pickup_request, dependent: :destroy
end
