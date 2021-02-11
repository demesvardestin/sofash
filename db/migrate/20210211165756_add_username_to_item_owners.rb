class AddUsernameToItemOwners < ActiveRecord::Migration[5.0]
  def change
    add_column :item_owners, :username, :string, unique: true
  end
end
