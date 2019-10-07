class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.integer :renter_id
      t.string :order_total

      t.timestamps
    end
    
    add_column :images, :first_source, :string
  end
end
