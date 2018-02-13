class Items::TodayController < ApplicationController
  def index
    @date = Date.current
    @items = current_user.items.of(@date).includes(:listable)
    @task = Task.new
  end
end
