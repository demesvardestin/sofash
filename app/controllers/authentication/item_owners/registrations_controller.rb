# frozen_string_literal: true

class Authentication::ItemOwners::RegistrationsController < Devise::RegistrationsController
  # before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]
  before_action :configure_permitted_parameters, if: :devise_controller?

  # POST /resource
  def create
    super
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :username, :password])
    devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
  end
  
  def after_sign_up_path_for(resource)
    complete_item_owner_profile_path
  end
end