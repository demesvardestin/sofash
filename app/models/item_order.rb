class ItemOrder < ApplicationRecord
    belongs_to :cart
    belongs_to :inventory_item
end
