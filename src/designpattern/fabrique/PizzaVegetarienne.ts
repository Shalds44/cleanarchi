import { Pizza } from './Pizza'

  export class PizzaVegetarienne extends Pizza {
  constructor() {
    super()
  }

    description(): string {
      return 'Je suis une pizza Végétarienne'
    }
}