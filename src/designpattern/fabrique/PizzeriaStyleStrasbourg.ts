import { Pizzeria } from './Pizzeria'
import type { Pizza } from './Pizza'
import { PizzaFromageStyleStrasbourg } from './pizzaStyleStrasbourg/PizzaFromageStyleStrasbourg'
import { PizzaPoivronsStyleStrasbourg } from './pizzaStyleStrasbourg/PizzaPoivronsStyleStrasbourg'
import { PizzaFruitsDeMerStyleStrasbourg } from './pizzaStyleStrasbourg/PizzaFruitsDeMerStyleStrasbourg'
import { PizzaVegetarienneStyleStrasbourg } from './pizzaStyleStrasbourg/PizzaVegetarienneStyleStrasbourg'
import { PizzaSurpriseStyleStrasbourg } from './pizzaStyleStrasbourg/PizzaSurpriseStyleStrasbourg'

export class PizzeriaStyleStrasbourg extends Pizzeria{
  creerPizza(type: string){
    if(type == "fromages"){
      return new PizzaFromageStyleStrasbourg()
    }else if(type == "poivrons"){
      return new PizzaPoivronsStyleStrasbourg()
    }else if(type == "fruits de mers"){
      return new PizzaFruitsDeMerStyleStrasbourg()
    }else if(type == "vegetariennes"){
      return new PizzaVegetarienneStyleStrasbourg()
    }else{
      return new PizzaSurpriseStyleStrasbourg()
    }
  }
}