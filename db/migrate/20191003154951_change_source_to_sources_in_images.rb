class ChangeSourceToSourcesInImages < ActiveRecord::Migration[5.0]
  def change
    rename_column :images, :source, :sources
  end
end
