class RentersController < ApplicationController
  before_action :authenticate_renter!
  
  def feed
  end
end
