import { Pizza } from './Pizza'

export class PizzaFruitsDeMer extends Pizza {
  constructor() {
    super()
  }

  description(): string {
    return 'Je suis une pizza au fruit de mer'
  }
}