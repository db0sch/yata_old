class Items::TomorrowController < ApplicationController
  def index
    @date = Date.tomorrow
    @items = current_user.items.where(date: @date).includes(:listable)
    @task = Task.new
  end
end
