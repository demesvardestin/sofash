class StripeWebhooksController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def account
        render status: 200, :nothing => true
    end
    
    def charge
        
    end
    
    def payout
        
    end
    
end
