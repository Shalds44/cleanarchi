import { Pizza } from '../Pizza'

export class PizzaSurpriseStyleBrest extends Pizza {
  constructor() {
    super()
  }

  description(): string {
    return 'Je suis une pizza surprise de Brest'
  }
}