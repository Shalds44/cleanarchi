import { Pizza } from '../Pizza'

export class PizzaFromageStyleStrasbourg extends Pizza {
  constructor() {
    super()
  }

  description(): string {
    return 'Je suis une pizza au fromage de Strasbourg'
  }
}