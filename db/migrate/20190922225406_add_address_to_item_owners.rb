class AddAddressToItemOwners < ActiveRecord::Migration[5.0]
  def change
    add_column :item_owners, :street_address, :text
    add_column :item_owners, :city, :string
    add_column :item_owners, :state, :string
    add_column :item_owners, :zipcode, :string
  end
end
