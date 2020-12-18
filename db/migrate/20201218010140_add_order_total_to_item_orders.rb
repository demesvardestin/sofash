class AddOrderTotalToItemOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :item_orders, :order_total, :string
  end
end
