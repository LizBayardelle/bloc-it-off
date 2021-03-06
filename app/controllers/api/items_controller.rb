class Api::ItemsController < ApiController
  # before_action :authenticated?

  def create
    p '@@@@@@@@@@@@@@@@@@@@2'
    p params
    p '@@@@@@@@@@@@@@@@@@@@2'
    item = Item.new(item_params)
    item.list_id = params[:list_id]
    if item.save
      render json: item
    else
      render json: { errors: item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    item = Item.find(params[:id])
    if item.update(item_params)
      render json: item
    else
      render json: { errors: item.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def item_params
    params.permit(:content, :done, :list_id)
  end

end
