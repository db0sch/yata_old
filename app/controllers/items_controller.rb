class ItemsController < ApplicationController
  def create
    @item = Item.new(task_params)
    @item.kind = "Task"
    @item.user = current_user
    if @item.save
      redirect_to_tasks_day @item.date
    end
  end

  def update
  end

  def destroy
  end

  private

  def task_params
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
