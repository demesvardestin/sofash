class CreateInventoryItems < ActiveRecord::Migration[5.0]
  def change
    create_table :inventory_items do |t|
      t.string :item_name
      t.string :item_brand
      t.string :item_make
      t.text :item_description
      t.integer :item_condition
      t.string :item_value
      t.boolean :in_stock, default: false

      t.timestamps
    end
  end
end
