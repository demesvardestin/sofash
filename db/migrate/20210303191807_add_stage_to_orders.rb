class AddStageToOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :orders, :stage, :integer, default: 0
  end
end
