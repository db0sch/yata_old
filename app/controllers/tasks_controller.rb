class TasksController < ApplicationController
  before_action :set_task, only: [:update, :destroy, :edit]

  def create
    @task = Task.new(task_params)
    @task.save
    @date = Date.parse(params[:task][:items][:date]) unless params[:task][:items][:date] == ''
    @item = @task.build_item(user: current_user)
    @item.date = @date if @date
    @item.save
    if @date == Date.current
      redirect_to today_index_path
    elsif @date == Date.tomorrow
      redirect_to tomorrow_index_path
    else
      redirect_to today_index_path
    end
  end

  def edit
  end

  def update
    @task.update(task_params)
    redirect_to today_index_path
  end

  def destroy
    @task.destroy
    redirect_to today_index_path
  end

  private

  def task_params
    params.require(:task).permit(:title, :done)
  end

  def set_task
    @task = Task.find(params[:id])
  end
end
