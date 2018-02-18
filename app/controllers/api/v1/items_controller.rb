class Api::V1::ItemsController < ApplicationController
  before_action :set_item, only: [:update]
  skip_before_action :verify_authenticity_token

  def index
    @items = current_user.items.today
    render json: @items
  end

  def create
  end

  def update
    @item.update(item_params)
    p "after"
    @items = current_user.items.today
    render json: @items
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
