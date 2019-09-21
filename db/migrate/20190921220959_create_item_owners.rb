class CreateItemOwners < ActiveRecord::Migration[5.0]
  def change
    create_table :item_owners do |t|
      t.string :first_name
      t.string :last_name
      t.boolean :verified
      t.boolean :flagged

      t.timestamps
    end
  end
end
