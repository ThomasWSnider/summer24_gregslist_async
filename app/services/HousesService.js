import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";

class HousesService {
  constructor() {
    console.log('I am being loaded');
  }
  async getHouses() {
    const response = await api.get('api/houses')

    console.log('I have your houses, bud', response.data);

    const newHouses = response.data.map((house) => new House(house))

    AppState.houses = newHouses
  }

}

export const housesService = new HousesService