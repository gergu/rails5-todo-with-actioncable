//= require todos/item
//= require todos/list

$(document).ready(function() {
  let list = new List('#list tbody');

  $(document).on('click', '#add-item', () => {
    let itemInput = $('#item-name');
    list.addItem(itemInput.val());
    itemInput.val('');
  });

  $(document).on('click', '.remove-item', e => {
    let id = $(e.toElement).closest('tr').data('id');
    list.removeItem(id);
    list.reorderItems(id);
  });
});
