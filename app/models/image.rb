class Image < ApplicationRecord
    belongs_to :inventory_item, dependent: :destroy
    mount_uploaders :sources, ImageUploader
    serialize :sources, JSON
end
