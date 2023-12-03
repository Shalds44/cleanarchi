import type {IdentifierCriteria} from "@/daxium/identifierCriteria";
import type {IdentifierReference} from "@/daxium/identifierReference";

export class Composition {
    identifiers: Array<IdentifierCriteria | IdentifierReference> = []
    operator: string
    uuid: string
    humanLanguage: string = null
    referenceHumanLanguage: array = []

    constructor(operator:String , uuid:String) {
        this.operator = operator
        this.uuid = uuid
    }

    addIdentifier(identifier: IdentifierReference | IdentifierCriteria){
        this.identifiers.push(identifier)
    }

    generateHumanLanguage(listComposition, criteria: array){
        const criteriaName = <String> []

        for (const identifier of this.identifiers) {
            const typeIdentifier = identifier.constructor.name

            if(typeIdentifier == "IdentifierCriteria") {
                criteriaName.push(identifier.getCriteriaName(criteria))
            }
            if(typeIdentifier == "IdentifierReference"){
                this.referenceHumanLanguage.push(this.getCompositionHumanLanguageByUuid(listComposition, identifier.uuid, criteria))
            }
        }

        if(this.referenceHumanLanguage.length){
            return this.humanLanguage = "( " + this.referenceHumanLanguage.join(" ") + " " +this.operator + " " +criteriaName.join(" " + this.operator + " ") + " )"
        }else{
            if (this.operator == "OR"){
                this.humanLanguage = criteriaName.join(" " + this.operator + " ")
            }else{
                this.humanLanguage = "( " + criteriaName.join(" " + this.operator + " ") + " )"
            }
        }

    }

    getHumanLanguage(listComposition, criteria: array){
        if (this.humanLanguage) return this.humanLanguage
        return this.generateHumanLanguage(listComposition, criteria)

    }

    getCompositionHumanLanguageByUuid(listComposition: array<this>, uuidRefererence: string, criteria:array){
        for (const composition of listComposition) {
            if(uuidRefererence == composition.uuid) return composition.getHumanLanguage(listComposition, criteria)

        }
    }

}