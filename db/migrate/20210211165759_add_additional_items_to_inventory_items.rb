class AddAdditionalItemsToInventoryItems < ActiveRecord::Migration[5.0]
  def change
    add_column :inventory_items, :size, :string
  end
end
