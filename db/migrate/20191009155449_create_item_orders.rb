class CreateItemOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :item_orders do |t|
      t.integer :cart_id
      t.integer :inventory_item_id
      t.integer :renter_id

      t.timestamps
    end
  end
end
