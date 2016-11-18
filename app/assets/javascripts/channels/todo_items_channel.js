App.todo_items = App.cable.subscriptions.create('TodoItemsChannel', {
  received: function(data) {
    if(data.action == 'create') {
      todoList.addItem(data.todo_item.content, data.todo_item.id);
    } else if(data.action == 'delete') {
      todoList.removeItem(data.todo_item.id);
      todoList.reorderItems(data.todo_item.id);
    }
  }
});
