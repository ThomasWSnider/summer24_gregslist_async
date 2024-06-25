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
    this.

  }


  get houseCardHTML() {
    return `
          <div class="row">
            <div class="d-flex  border-2 border-dark border shadow px-0">
              <div class="col-12 col-md-3">
                <img class="img-fluid house-img"
                  src="https://images.unsplash.com/photo-1607908560428-36ff9e0363b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="${this.address}">
              </div>
              <div class="col-12 col-md-9 d-flex flex-column justify-content-between pe-4">
                <div>
                  <h2 class="fs-3 fw-bold">$${this.price}</h2>
                  <h2 class="fs-3 text-end">${this.address}</h2>
                  <hr>
                  <h2 class="fs-4">${this.bedrooms} bed, ${this.bathrooms} bath</h2>
                  <p>${this.description}</p>
                  <p class="fw-bold">${this.sqft} square feet</p>
                  <div>
                    ${this.bugIcon}
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center mb-2 ">
                  <p class="mb-0">${this.year}</p>
                  <button class="btn btn-outline-danger">Delete Listing</button>
                </div>
              </div>
            </div>
          </div>
    `
  }
}