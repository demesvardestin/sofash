module ApplicationHelper
    def navbar
        if current_item_owner
            "layouts/io_navbar"
        elsif current_renter
            "layouts/renter_navbar"
        else
            "layouts/base_navbar"
        end
    end
    
    def body
        if current_item_owner
            "layouts/io_body"
        elsif current_renter
            "layouts/renter_body"
        else
            "layouts/base_body"
        end
    end
    
    def pretty_display(text, link=false)
        if !text.empty?
            if !link
                text
            else
                html = <<-html
                    <a href="#{text}" target="_blank">
                        #{text}
                    </a>
                html
                
                raw html
            end
        else
            "N/A"
        end
    end
    
    def page_name
        return "" if request.path_info == "/"
        " | " + request.path_info.split('/').map(&:capitalize).join(' ')
    end
    
    def path_for(path)
        if request.original_url.include?(path)
           return "active" 
        end
        
        return ""
    end
end
