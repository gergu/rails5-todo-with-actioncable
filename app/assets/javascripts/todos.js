//= require todos/item
//= require todos/list

$(document).ready(function() {
  window.todoList = new List('#list tbody');;

  $.get('/todo_items', {
    dataType: 'json',
    format: 'json'
  }).success(function(data) {
    $.each(data.todo_items, function(index, item) {
      todoList.addItem(item.content, item.id);
    });
  });

  $(document).on('click', '.remove-item', e => {
    let id = $(e.toElement).closest('tr').data('id');
    $.ajax({
      url: `/todo_items/${id}`,
      method: 'DELETE'
    });
  });


});
