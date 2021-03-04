class Renter < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  geocoded_by :full_address
  after_validation :geocode
  
  has_many :carts
  has_many :orders
  
  def home_location
    "#{city}, #{state}"
  end
  
  def full_address
    [street_address, city, state, zipcode].join(",")
  end
end
