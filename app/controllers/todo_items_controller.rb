class TodoItemsController < ApplicationController
  def index
    @todo_item = TodoItem.new
    @todo_items = TodoItem.all
  end

  def create
    @todo_item = TodoItem.new(todo_item_params)
    @todo_item.save
  end

  private

  def todo_item_params
    params.require(:todo_item).permit(:content)
  end
end
