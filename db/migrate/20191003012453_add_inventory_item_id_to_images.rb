class AddInventoryItemIdToImages < ActiveRecord::Migration[5.0]
  def change
    add_column :images, :inventory_item_id, :integer
  end
end
