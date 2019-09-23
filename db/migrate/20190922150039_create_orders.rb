class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :total_due
      t.string :total_paid
      t.boolean :packaged
      t.boolean :shipped_to_renter
      t.boolean :delivered_to_renter
      t.boolean :returned_by_renter

      t.timestamps
    end
  end
end
