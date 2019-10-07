class PagesController < ApplicationController
    
    def index
        @items = InventoryItem.latest_arrivals
    end
    
    def browse
        
    end
    
    def popular
        
    end
    
    def brands
        
    end
    
end
