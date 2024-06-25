import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class HousesController {
  constructor() {
    AppState.on('houses', this.drawHouses)
    console.log('I am working');
    this.getHouses()
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      Pop.error(error)
      console.error('Check your getHouses methods');
    }
  }

  drawHouses() {
    const houses = AppState.houses
    let houseListingsHTML = ``
    houses.forEach((house) => houseListingsHTML += house.houseCardHTML)
    setHTML('houseListings', houseListingsHTML)
  }
}