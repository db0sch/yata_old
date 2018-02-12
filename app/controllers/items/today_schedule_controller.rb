class Items::TodayScheduleController < ApplicationController
  before_action :set_item, only: [:update, :destroy]

  def update
    p "hello"
    p @item
    @item.update(date: Date.today)
    redirect_to today_index_path
  end

  def destroy
    @item.update(date: nil)
    redirect_to today_index_path
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end
end
