class AddPickupLocationDetailsToOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :pickup_location_name, :string, default: ""
    add_column :orders, :pickup_location_address, :string, default: ""
    add_column :orders, :pickup_location_id, :string, default: ""
  end
end
