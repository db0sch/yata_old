class Api::V1::ItemsController < ApplicationController
  before_action :set_item, only: [:update]
  skip_before_action :verify_authenticity_token

  def index
    date = params[:date] ? Date.parse(params[:date]) : Date.current
    case date
    when Date.current then @items = current_user.items.today
    when Date.tomorrow then @items = current_user.items.tomorrow
    end
    # need to handle the undone past part
    # @items = current_user.items.today
    respond_to do |format|
      format.json { render "index.json" }
      format.html { render "index.json" }
    end
  end

  def create
  end

  def update
    @item.update(item_params)
    @items = current_user.items.today
    respond_to do |format|
      format.json { render "index.json" }
      format.html { render "index.json" }
    end
  end

  def destroy
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:title, :done, :position, :date)
  end
end
