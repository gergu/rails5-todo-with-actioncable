class TodoItemsController < ApplicationController
  def index
    @todo_item = TodoItem.new
    @todo_items = TodoItem.all

    respond_to do |format|
      format.html
      format.json { render json: {todo_items: @todo_items } }
    end
  end

  def create
    @todo_item = TodoItem.new(todo_item_params)
    @todo_item.save
    ActionCable.server.broadcast 'todo_items', todo_item: @todo_item, action: 'create'
  end

  def destroy
    @todo_item = TodoItem.find(params[:id])
    @todo_item.destroy
    ActionCable.server.broadcast 'todo_items', todo_item: @todo_item, action: 'delete'
    head :ok
  end

  private

  def todo_item_params
    params.require(:todo_item).permit(:content)
  end
end
