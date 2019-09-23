class CreatePickupRequestItems < ActiveRecord::Migration[5.0]
  def change
    create_table :pickup_request_items do |t|
      t.string :item_name
      t.string :item_brand
      t.string :item_make
      t.text :item_description
      t.integer :item_condition
      t.string :item_market_value
      t.boolean :added_to_inventory, default: false

      t.timestamps
    end
  end
end
