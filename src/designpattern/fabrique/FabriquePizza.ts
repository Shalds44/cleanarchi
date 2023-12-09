import { PizzaFromage } from './PizzaFromage'
import { PizzaPoivrons } from './PizzaPoivrons'
import { PizzaFruitsDeMer } from './PizzaFruitsDeMer'
import { PizzaVegetarienne } from './PizzaVegetarienne'
import type { Pizza } from './Pizza'

export class FabriquePizza{
  creerPizza(type: string):Pizza | string{
    if(type == "fromages"){
      return new PizzaFromage()
    }else if(type == "poivrons"){
      return new PizzaPoivrons()
    }else if(type == "fruits de mers"){
      return new PizzaFruitsDeMer()
    }else if(type == "vegetariennes"){
      return new PizzaVegetarienne()
    }else{
      return "no pizza"
    }
  }
}