export default class Shop {

  constructor({ title, price, description, img, stock, id = generateId() }) {
    this.id = id
    this.title = title
    this.price = price
    this.description = description
    this.img = img
    this.stock = stock
  }
  get Template() {
    return `<div class="col-md-3 m-0 p-3">
   <div class="cardShadows">
       <div class="row m-0 p-0">
           <div class="col-md-12 p-0"><img class="w-100" src="${this.img}" alt=""></div>
       </div>
       <div
           class="row d-flex justify-content-center flex-column  text-center bg-dark text-light cardy m-0 p-0">
           <div class="col-md-12">
               <h4 class="shadows">${this.title}</h4>
           </div>
           <div class="col-md-12 ">
               <p class="shadows">${this.price}</p>
           </div>
           <div class="col-md-12">
               <p class="shadows">${this.description}</p>
           </div>
           <div class="d-flex align-items-end">
               <div class="col-md-6">
                   <p class="m-0">Stock:<span>${this.stock}</span></p>
               </div>
               <div class="col-md-6">
                   <button>Add Cart</button>
               </div>
           </div>
       </div>
   </div>
  </div>`
  }


}
