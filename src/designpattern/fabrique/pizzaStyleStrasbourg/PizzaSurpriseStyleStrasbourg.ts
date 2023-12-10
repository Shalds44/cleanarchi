import { Pizza } from '../Pizza'

export class PizzaSurpriseStyleStrasbourg extends Pizza {
  constructor() {
    super()
  }

  description(): string {
    return 'Je suis une pizza surprise de Strasbourg'
  }
}