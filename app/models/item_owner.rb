class ItemOwner < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
 
  has_many :inventory_items
  has_many :pickup_requests, dependent: :destroy
  has_many :pickup_request_items, through: :pickup_requests
  
  def full_name
    first_name + " " + last_name
  end
end
