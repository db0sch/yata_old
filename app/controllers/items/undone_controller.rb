class Items::UndoneController < ApplicationController
  def index
    @date = Date.yesterday
    @items = current_user.items.before(@date).includes(:listable)
    @task = Task.new
  end
end
