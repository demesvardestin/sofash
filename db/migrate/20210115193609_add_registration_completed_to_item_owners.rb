class AddRegistrationCompletedToItemOwners < ActiveRecord::Migration[5.0]
  def change
    add_column :item_owners, :registration_completed, :boolean, default: false
  end
end
