import Boisson from "@/designpattern/decorator/Boisson";

export interface DecoratorCafe extends Boisson {
    cout(): number
}