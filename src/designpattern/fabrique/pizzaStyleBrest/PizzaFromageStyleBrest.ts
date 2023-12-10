import { Pizza } from '../Pizza'

export class PizzaFromageStyleBrest extends Pizza {
  constructor() {
    super()
  }

  description(): string {
    return 'Je suis une pizza au fromage de Brest'
  }
}