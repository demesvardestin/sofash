class ItemCategory < ApplicationRecord
    has_many :inventory_items
    has_many :pickup_request_items
end
