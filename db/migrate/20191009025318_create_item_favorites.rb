class CreateItemFavorites < ActiveRecord::Migration[5.0]
  def change
    create_table :item_favorites do |t|
      t.integer :inventory_item_id
      t.integer :renter_id

      t.timestamps
    end
  end
end
