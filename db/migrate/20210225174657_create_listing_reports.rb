class CreateListingReports < ActiveRecord::Migration[5.0]
  def change
    create_table :listing_reports do |t|
      t.integer :inventory_item_id
      t.integer :renter_id
      t.text :reason, default: ""
      t.boolean :resolved, default: false

      t.timestamps
    end
  end
end
