import { Pizzeria } from './Pizzeria'
import type { Pizza } from './Pizza'
import { PizzaFromageStyleBrest } from './pizzaStyleBrest/PizzaFromageStyleBrest'
import { PizzaPoivronsStyleBrest } from './pizzaStyleBrest/PizzaPoivronsStyleBrest'
import { PizzaFruitsDeMerStyleBrest } from './pizzaStyleBrest/PizzaFruitsDeMerStyleBrest'
import { PizzaVegetarienneStyleBrest } from './pizzaStyleBrest/PizzaVegetarienneStyleBrest'
import { PizzaSurpriseStyleBrest } from './pizzaStyleBrest/PizzaSurpriseStyleBrest'

export class PizzeriaStyleBrest extends Pizzeria{
  creerPizza(type: string){
    if(type == "fromages"){
      return new PizzaFromageStyleBrest()
    }else if(type == "poivrons"){
      return new PizzaPoivronsStyleBrest()
    }else if(type == "fruits de mers"){
      return new PizzaFruitsDeMerStyleBrest()
    }else if(type == "vegetariennes"){
      return new PizzaVegetarienneStyleBrest()
    }else{
      return new PizzaSurpriseStyleBrest()
    }
  }

}