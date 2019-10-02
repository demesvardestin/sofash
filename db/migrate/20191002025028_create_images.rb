class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.text :source
      t.string :alt

      t.timestamps
    end
  end
end
