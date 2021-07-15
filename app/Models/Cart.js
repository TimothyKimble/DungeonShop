import generateId from "../Utils/generateId.js"
import Shop from "./Shop.js"

export default class Cart {

  constructor({ name, shopId, id = generateId() }) {
    this.id = id
    this.shopId = shopId
    this.name = name
  }
}