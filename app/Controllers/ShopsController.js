import { shopsServices } from "../Services/ShopsServices.js";
import { ProxyState } from "../AppState.js";

function _draw() {
  let template = ''
  ProxyState.store.forEach(item => {
    template += item.Template
  })
  document.getElementById('items') = template
}

export default class ShopsController {
  constructor() {
    ProxyState.on('items', _draw)
    _draw()
  }

}