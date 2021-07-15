import { ProxyState } from "../AppState.js";
import Shop from "../Models/Shop.js";

class ShopsServices {

  createItem(product) {
    ProxyState.store = [...ProxyState.store, new Shop(product)]
  }
}

export const shopsServices = ShopsServices