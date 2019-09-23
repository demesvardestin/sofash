class AddDetailsToPickupRequestItems < ActiveRecord::Migration[5.0]
  def change
    add_column :pickup_request_items, :pickup_request_id, :integer
    add_column :pickup_requests, :item_owner_id, :integer
  end
end
