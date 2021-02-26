class ListingReport < ApplicationRecord
    belongs_to :renter
    has_one :inventory_item
end
