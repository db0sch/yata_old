class Items::UndoneController < ApplicationController
  def index
    @date = Date.yesterday
    @items = current_user.items.past.undone
    @item = Item.new
  end
end
