class TasksController < ApplicationController
  before_action :set_task, only: [:update, :destroy]

  def create
    @task = Task.new(task_params)
    @task.save
    @item = @task.build_item(user: current_user, date: Date.today)
    @item.save
    redirect_to today_index_path
  end

  def update
    @task.update(task_params)
    redirect_to today_index_path
  end

  def destroy
  end

  private

  def task_params
    params.require(:task).permit(:title, :done)
  end

  def set_task
    @task = Task.find(params[:id])
  end
end
