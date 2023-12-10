import { Pizza } from '../Pizza'

export class PizzaPoivronsStyleStrasbourg extends Pizza {
  constructor() {
    super()
  }

  description(): string {
    return 'Je suis une pizza aux poivrons de Strasbourg'
  }
}