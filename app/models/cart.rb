class Cart < ApplicationRecord
    belongs_to :renter
    has_many :item_orders
end
