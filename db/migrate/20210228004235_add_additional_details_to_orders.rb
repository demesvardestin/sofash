class AddAdditionalDetailsToOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :rental_start, :string
    add_column :orders, :rental_end, :string
    add_column :orders, :service_fee, :string
  end
end
