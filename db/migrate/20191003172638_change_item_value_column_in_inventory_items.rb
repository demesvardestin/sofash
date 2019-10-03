class ChangeItemValueColumnInInventoryItems < ActiveRecord::Migration[5.0]
  def change
    rename_column :inventory_items, :item_value, :market_value
  end
end
