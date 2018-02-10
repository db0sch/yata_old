class TasksController < ApplicationController
  def create
    @task = Task.new(task_params)
    @task.save
    @item = Item.new
    @item.listable = @task
    @item.user = current_user
    @item.date = Date.today
    @item.save
    redirect_to today_index_path
  end

  def update
  end

  def destroy
  end

  private

  def task_params
    params.require(:task).permit(:title)
  end
end
