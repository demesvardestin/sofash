class AddStripeDetailsToItemOwners < ActiveRecord::Migration[5.0]
  def change
    add_column :item_owners, :stripe_account_id, :string
  end
end
