class ItemsController < ApplicationController
  before_action :set_item, only: [:edit, :update, :destroy]

  def create
    @item = Item.new(item_params)
    @item.kind = "Task"
    @item.user = current_user
    if @item.save
      redirect_to_tasks_day @item.date
    end
  end

  def edit
  end

  def update
    @item.update(item_params)
    redirect_to_tasks_day(@item.date)
  end

  def destroy
    @item.destroy
    redirect_back(fallback_location: root_path)
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:title, :done, :date)
  end

  def redirect_to_tasks_day(date)
    case date
    when Date.current then redirect_to today_index_path
    when Date.tomorrow then redirect_to tomorrow_index_path
    else redirect_to undone_index_path
    end
  end
end
