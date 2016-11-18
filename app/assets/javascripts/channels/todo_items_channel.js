App.todo_items = App.cable.subscriptions.create('TodoItemsChannel', {
  received: function(data) {
    todoList.addItem(data.todo_item.content);
  }
});
