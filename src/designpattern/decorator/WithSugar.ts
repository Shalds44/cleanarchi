import {DecoratorCafe} from "@/designpattern/decorator/DecoratorCafe";
import {Boisson} from "@/designpattern/decorator/Boisson";

export class WithSugar implements DecoratorCafe{
    boisson: Boisson

    constructor(boisson: Boisson) {
        this.boisson = boisson
    }
    cout(){
        return 8 + this.boisson.cout()
    }
}
