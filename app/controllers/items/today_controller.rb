class Items::TodayController < ApplicationController
  def index
    @date = Date.today
    @items = current_user.items.where(date: @date).includes(:listable)
    @task = Task.new
  end
end
