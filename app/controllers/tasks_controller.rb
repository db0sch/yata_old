class TasksController < ApplicationController
  before_action :set_task, only: [:update, :destroy]

  def create
    @task = Task.new(task_params)
    @task.save
    @date = Date.parse(params[:task][:items][:date])
    @item = @task.build_item(user: current_user, date: @date)
    @item.save
    if @date == Date.today
      redirect_to today_index_path
    elsif @date == Date.tomorrow
      redirect_to tomorrow_index_path
    else
      redirect_to today_index_path
    end
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
