import { Pizza } from '../Pizza'

  export class PizzaVegetarienneStyleBrest extends Pizza {
  constructor() {
    super()
  }

    description(): string {
      return 'Je suis une pizza Végétarienne de Brest'
    }
}