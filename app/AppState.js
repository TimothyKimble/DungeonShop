import Value from "./Models/Value.js"
import Shop from "./Models/Shop.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Shop[]} */
  store = [
    new Shop({
      title: 'Magic Set',
      price: 50,
      description: 'Get Addicted to Magic',
      img: '../assets/img/magicset.jpg',
      stock: 20,
    }),
    new Shop({
      title: 'D&D Socks',
      price: 15,
      description: 'Walk with Style',
      img: '../assets/img/socks.jpg',
      stock: 40,
    }),
    new Shop({
      title: 'Blanket',
      price: 100,
      description: 'Sleep Naturally',
      img: '',
      stock: 25,
    }),
    new Shop({ title: 'Mug', price: 35, description: 'Drink the blood of your enemies', img: '..assets/img/dndmug.jpg', stock: 25 }),
    new Shop({ title: 'Minitures', price: 50, description: 'Choose your Warrior', img: '..assets/img/minitures.jpg', stock: 20 }), new Shop({ title: 'Shirt', price: 50, description: 'Show off your Success', img: '..assets/img/shirt.jpg', stock: 100 }),
    new Shop({ title: 'Vampire Set', price: 75, description: 'Vampire: The Masquerade Slipcase Set', img: '..assets/img/vampire.jpg', stock: 20 }),
    new Shop({ title: 'Adventurer Bag', price: 100, description: 'Perfect for fitting all your D&D needs', img: '..assets/img/bag.jpg', stock: 10 })]

  totalCost = 0
  addMoney = 20
  wallet = 200
  cart = []

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
