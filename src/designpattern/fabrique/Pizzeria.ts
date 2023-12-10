import type { Pizza } from './Pizza'

export abstract class Pizzeria {
  pizza: Pizza

  commanderPizza(type: string): Pizza | string{
    const pizza = this.creerPizza(type)
    pizza.preparer()
    pizza.cuire()
    pizza.couper()
    pizza.emballer()
    return pizza
  }

  abstract creerPizza(type: string): Pizza
}