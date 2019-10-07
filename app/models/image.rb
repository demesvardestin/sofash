class Image < ApplicationRecord
    belongs_to :inventory_item
    mount_uploaders :sources, ImageUploader
    serialize :sources, JSON
end
