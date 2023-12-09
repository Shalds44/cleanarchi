export abstract class Boisson{
    description: string

    abstract cout():number
    setDescription(description: string):void{
        this.description = description
    }

    getDescription():string{
        return this.description
    }
}