class Order < ApplicationRecord
    belongs_to :renter
    has_many :inventory_items
end
