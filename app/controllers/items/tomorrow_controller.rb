class Items::TomorrowController < ApplicationController
  def index
    @items = current_user.items.where(date: Date.tomorrow).includes(:listable)
    @task = Task.new
  end
end
