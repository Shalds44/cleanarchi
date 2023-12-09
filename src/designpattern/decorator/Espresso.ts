import {Boisson} from "@/designpattern/decorator/Boisson";

export default class Colombia extends Boisson
{
    constructor() {
        super();
    }

    cout(){
        return 1.5
    }
}