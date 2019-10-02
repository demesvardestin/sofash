class InventoryItem < ApplicationRecord
    def slug
        id.to_s << "-" << item_name.split(" ").join("-")[0..-2]
    end
end
