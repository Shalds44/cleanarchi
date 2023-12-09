import { Pizza } from './Pizza'

export class PizzaPoivrons extends Pizza {
  constructor() {
    super()
  }

  description(): string {
    return 'Je suis une pizza aux poivrons'
  }
}