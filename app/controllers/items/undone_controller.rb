class Items::UndoneController < ApplicationController
  def index
    @date = Date.yesterday
    @items = current_user.items.before(@date).undone
    @item = Item.new
  end
end
