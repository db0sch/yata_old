class Items::TodayScheduleController < ApplicationController
  before_action :set_item, only: [:update, :destroy]

  def update
    @item.update(date: Date.current)
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
