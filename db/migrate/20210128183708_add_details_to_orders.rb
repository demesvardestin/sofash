class AddDetailsToOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :inventory_item_id, :integer
    add_column :orders, :item_owner_id, :integer
    add_column :orders, :renter_id, :integer
    add_column :orders, :initial_price, :string
    add_column :orders, :tax, :string
    add_column :orders, :final_price, :string
  end
end
