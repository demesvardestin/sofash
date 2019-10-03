class Image < ApplicationRecord
    belongs_to :inventory_item, dependent: :destroy
    mount_uploader :sources, ImageUploader
    serialize :sources, JSON
end
