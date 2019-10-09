class AddRenterEmailToCarts < ActiveRecord::Migration[5.0]
  def change
    add_column :carts, :renter_email, :string
    add_column :carts, :checked_out, :boolean, default: false
    remove_column :carts, :renter_id, :integer
  end
end
