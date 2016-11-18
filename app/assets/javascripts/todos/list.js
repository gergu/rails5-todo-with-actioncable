class List {
  constructor(container) {
    this.container = $(container);
    this.lastId = 0;
    this.elements = new Map();
  }
  addItem(name) {
    if(name.length < 1) {
      return;
    }
    this.lastId++;
    let item = new Item({
      name: name,
      id: this.lastId,
      orderNumber: this.elements.size + 1,
      container: this.container
    });
    item.appendToList();
    this.elements.set(this.lastId, item);
  }
  removeItem(id) {
    let index = parseInt(id);
    this.elements.get(index).destroy();
    this.elements.delete(index);
  }
  reorderItems(id) {
    let index = parseInt(id);
    for(let [key, element] of this.elements) {
      if(key < index) {
        continue;
      }
      element.decreaseOrderNumber();
      element.rerender();
    }
  }
}
