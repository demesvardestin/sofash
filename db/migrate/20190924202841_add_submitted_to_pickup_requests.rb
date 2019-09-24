class AddSubmittedToPickupRequests < ActiveRecord::Migration[5.0]
  def change
    add_column :pickup_requests, :submitted, :boolean, default: false
    add_column :pickup_requests, :confirmation_token, :string
  end
end
