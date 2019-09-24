class ItemOwners::PickupRequestsController < ApplicationController
    before_action :set_pr
    before_action :set_io
    
    def destroy
        @pr.destroy
        
        redirect_to io_dashboard_path
    end
    
    def submit_pr
        @io.pickup_request.update(submitted: true)
        
        redirect_to pr_confirmation_path(:confirmation => @pr.confirmation_token),
            notice: "Your pickup request has been submitted!"
    end
    
    def pr_confirmation
        
    end
    
    private
    
    def set_io
        @io = current_item_owner
    end
    
    def set_pr
        @pr = PickupRequest.find(params[:id])
    end
end
