export class House {

  constructor(data) {
    this.id = data.id
    this.bedroomQuantity = data.bedrooms
    this.bathroomQuantity = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creatorId = data.creatorId
    this.creator = data.creator

  }


  get houseCardHTML() {
    return `
          <div class="row mb-3">
            <div class="d-flex  border-2 border-dark border shadow px-0 justify-content-between">
              <div class="col-12 col-md-3">
                <img class="img-fluid house-img"
                  src="${this.imgUrl}"
                  alt="${this.creator.name}'s Home">
              </div>
              <div class="col-12 col-md-8 d-flex flex-column justify-content-between pe-4">
                <div>
                  <h2 class="fw-bold text-center">$${this.price}</h2>
                  <hr>
                  <h2 class="fs-4">${this.bedroomQuantity} bed, ${this.bathroomQuantity} bath</h2>
                  <p>${this.description}</p>
                  <p class="fw-bold">${this.levels} levels</p>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-2 ">
                  <p class="mb-0">${this.year}</p>
                  <p class="mb-0">Seller: ${this.creator.name}</p>
                  <button class="btn btn-outline-danger">Delete Listing</button>
                </div>
              </div>
            </div>
          </div>
    `
  }
}