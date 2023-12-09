import type { Pizza } from './Pizza'
import { FabriquePizza } from '@/designpattern/fabrique/FabriquePizza'

export class CommanderPizza{
  pizza: Pizza
  type: string
  fabriquePizza: FabriquePizza

  constructor(type: string, fabrique: FabriquePizza) {
    this.type = type
    this.fabriquePizza = fabrique
  }

  commanderPizza(): Pizza | string{
    this.pizza = this.fabriquePizza.creerPizza(this.type)

    this.pizza.preparer()
    this.pizza.cuire()
    this.pizza.couper()
    this.pizza.emballer()
    return this.pizza
  }
}