class AddAddressToRenters < ActiveRecord::Migration[5.0]
  def change
    add_column :renters, :street_address, :string, default: ""
    add_column :renters, :city, :string, default: ""
    add_column :renters, :state, :string, default: ""
    add_column :renters, :zipcode, :string, default: ""
    add_column :renters, :longitude, :float
    add_column :renters, :latitude, :float
  end
end
