class Items::TomorrowController < ApplicationController
  def index
    @date = Date.tomorrow
    @items = current_user.items.of(@date)
    @item = Item.new
  end
end
