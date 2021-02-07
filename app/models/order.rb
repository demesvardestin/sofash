class Order < ApplicationRecord
    belongs_to :item_owner
    belongs_to :renter
    has_one :inventory_item
end
