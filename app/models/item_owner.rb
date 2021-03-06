class ItemOwner < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
 
  has_many :inventory_items
  has_many :orders
  
  def full_name
    first_name + " " + last_name
  end
  
  def item_count
    inventory_items.length
  end
  
  def has_completed_registration
    registration_completed
  end
  
  def has_not_completed_registration
    registration_completed == false
  end
  
  def live_orders
    Order.where(item_owner_id: id, completed: false)
  end
  
  def has_live_orders
    live_orders.size > 0
  end
  
  def has_transactions
    
  end
end
