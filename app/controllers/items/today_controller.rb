class Items::TodayController < ApplicationController
  def index
    @date = Date.current
    @items = current_user.items.today
    @item = Item.new
  end
end
