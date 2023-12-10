import { Pizza } from '../Pizza'

export class PizzaPoivronsStyleBrest extends Pizza {
  constructor() {
    super()
  }

  description(): string {
    return 'Je suis une pizza aux poivrons de Brest'
  }
}