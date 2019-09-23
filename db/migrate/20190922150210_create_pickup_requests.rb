class CreatePickupRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :pickup_requests do |t|
      t.text :description

      t.timestamps
    end
  end
end
