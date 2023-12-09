import { Pizza } from './Pizza'

export class PizzaFromage extends Pizza {
  constructor() {
    super()
  }

  description(): string {
    return 'Je suis une pizza au fromage'
  }
}