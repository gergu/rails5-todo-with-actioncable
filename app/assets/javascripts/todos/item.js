class Item {
  constructor(options={}) {
    this.id = options.id;
    this.name = options.name;
    this.orderNumber = options.orderNumber;
    this.container = options.container;
  }
  build() {
    return $(`<tr data-id="${this.id}">
      <td class="counter text-right text-muted" style="width: 50px;">${this.orderNumber}</td>
      <td>${this.name}</td>
      <td class="text-right"><button class="btn btn-sm btn-danger remove-item">X</button></td></tr>`);
  }
  appendToList() {
    this.container.append(this.build());
  }
  decreaseOrderNumber() {
    this.orderNumber--;
  }
  rerender() {
    this._findDomElement().replaceWith(this.build());
  }
  destroy() {
    this._findDomElement().remove();
  }
  _findDomElement() {
    return this.container.find(`tr[data-id="${this.id}"]`);
  }
}
