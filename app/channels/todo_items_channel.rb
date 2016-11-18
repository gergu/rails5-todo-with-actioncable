class TodoItemsChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'todo_items'
  end
end
