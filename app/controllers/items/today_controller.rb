class Items::TodayController < ApplicationController
  def index
    @items = current_user.items.where(date: Date.today).includes(:listable)
    @task = Task.new
  end
end
