class ListingReportsController < ApplicationController
  before_action :authenticate_renter!
  
  def create
    @report = ListingReport.new(report_params)
    @report.renter = current_renter
    
    respond_to do |format|
      if @report.save
        format.js { render "report_submitted", :layout => false }
      else
        format.js { render "submission_error", :layout => false }
      end
    end
  end
  
  private
  
  def report_params
    params
    .require(:listing_report)
    .permit(
      :reason
      )
  end
end
