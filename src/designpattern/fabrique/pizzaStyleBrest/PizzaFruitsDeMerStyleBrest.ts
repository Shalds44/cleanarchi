import { Pizza } from '../Pizza'

export class PizzaFruitsDeMerStyleBrest extends Pizza {
  constructor() {
    super()
  }

  description(): string {
    return 'Je suis une pizza au fruit de mer de Brest'
  }
}