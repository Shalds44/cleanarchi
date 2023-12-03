// function Decorateur(cible: any){
//     console.log(cible)
//     console.log("function dans le decorateur")
// }

function ComponentFactory(param: {template: string, selector: string}){
    console.log(param)
    return(target: any) => {

    }
}
@ComponentFactory({
    template: '<h1>Hello</h1>',
    selector: "app"
})
export class decoratorExample{
    public name: string
    constructor(name: string) {
        this.name = name
    }
}