# frozen_string_literal: true

class Authentication::ItemOwners::SessionsController < Devise::SessionsController
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected
  
  def after_sign_in_path_for(resource)
    stored_location_for(resource) ||
    if resource.is_a?(ItemOwner) && resource.has_completed_registration == true
      io_dashboard_path
    elsif resource.is_a?(ItemOwner) && resource.has_completed_registration == false
      complete_item_owner_profile_path
    else
      super
    end
  end
end