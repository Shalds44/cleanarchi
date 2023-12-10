import { Pizza } from '../Pizza'

  export class PizzaVegetarienneStyleStrasbourg extends Pizza {
  constructor() {
    super()
  }

    description(): string {
      return 'Je suis une pizza Végétarienne de Strasbourg'
    }
}