class Items::TodayController < ApplicationController
  def index
    @date = Date.current
    @items = current_user.items.of(@date)
    @item = Item.new
  end
end
