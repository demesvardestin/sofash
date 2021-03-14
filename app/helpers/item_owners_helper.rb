module ItemOwnersHelper
    def item_owner_form_button_text
        if current_item_owner.registration_completed == true
            "Save"
        else
            "Save and continue"
        end
    end
    
    def item_owner_form_button_disable_with_text
        if current_item_owner.registration_completed == true
            "Saving..."
        else
            "Redirecting you to Stripe"
        end
    end
end
