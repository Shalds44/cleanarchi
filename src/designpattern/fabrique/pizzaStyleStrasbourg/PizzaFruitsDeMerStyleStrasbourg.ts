import { Pizza } from '../Pizza'

export class PizzaFruitsDeMerStyleStrasbourg extends Pizza {
  constructor() {
    super()
  }

  description(): string {
    return 'Je suis une pizza au fruit de mer de Strasbourg'
  }
}