class AddTagsToInventoryItems < ActiveRecord::Migration[5.0]
  def change
    add_column :inventory_items, :tags, :string, default: ""
    add_column :inventory_items, :colors, :string, default: ""
  end
end
