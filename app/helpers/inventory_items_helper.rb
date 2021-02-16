module InventoryItemsHelper
    def brands
        {
            "Nike": "https://images.ctfassets.net/bdvz0u6oqffk/8Cq9QsIYgAv74hekEvG0v/72c7de3da26cce652046dfa1d667c025/Thumbnail.jpg?h=200&w=200&fm=webp",
            "Jordan": "https://images.ctfassets.net/bdvz0u6oqffk/69IpPDrC0tR4goEa2F294O/024e11d8564932a1bedb20a23cb32da5/Jordan.jpg?h=200&w=200&fm=webp",
            "Addidas": "https://images.ctfassets.net/bdvz0u6oqffk/1I0CPUdwktWEcAU6gxcCjI/b92541e49f97930c7f2d52f4498b7566/Adidas.jpg?h=200&w=200&fm=webp",
            "Yeezy": "https://images.ctfassets.net/bdvz0u6oqffk/6sDEExM2Z545zamph3hcWf/434e52959f29a0b5748fc7057ba285ca/Yeezy.jpg?h=200&w=200&fm=webp",
            "Gucci": "/images/gucci_logo.png",
            "Balenciaga": "https://images.ctfassets.net/bdvz0u6oqffk/zJGAKcC0I2n5kaKMHNgHo/35e57e46e272dd90297a532826e1ea51/Balenciaga.jpg?h=200&w=200&fm=webp"
            
        }
    end
    
    def availability_color_for(item)
        case item.availability
        when "in stock"
            "success"
        else
            "danger"
        end
    end
    
    def is_in_cart(item)
        return false if current_cart.order.nil?
        current_cart.order.inventory_item == item
    end
    
    def is_in_favorites(item)
        if !current_or_guest_renter.guest
            favorites = current_renter.item_favorites.map(&:inventory_item_id)
            if favorites.include?(item.id)
                return true
            end
        end
        
        return false
    end
end
