import {Composition} from "@/daxium/composition";
import {IdentifierCriteria} from "@/daxium/identifierCriteria";
import {IdentifierReference} from "@/daxium/identifierReference";

const datacas3 = {
    "criteria":
        [
            {
                "uuid": "9c7b4212-ad88-4817-afb4-f1ef2a21f28e",
                "name": "critère_1"
            },
            {
                "uuid": "1c944f87-b244-459b-ae42-efbcb032a1d3",
                "name": "critère_2"
            },
            {
                "uuid": "8259c681-5dd9-4304-bc48-cf93b00dbfe9",
                "name": "critère_3"
            },
            {
                "uuid": "e1cdc9fb-ab2d-4c15-9374-32b2a0de16ce",
                "name": "critère_4"
            },
            {
                "uuid": "01776afc-9332-4105-ba7e-ac2374ff2267",
                "name": "critère_5"
            },
            {
                "uuid": "9e1923df-85a6-4b55-bde3-08b7953ef48e",
                "name": "critère_6"
            },
            {
                "uuid": "32083edd-e4ab-400e-a06c-1c6d5957eecf",
                "name": "critère_7"
            }
        ],
    "composition":
        [
            {
                "identifiers":
                    [
                        {
                            "uuid": "01776afc-9332-4105-ba7e-ac2374ff2267",
                            "type": "CRITERIA"
                        },
                        {
                            "uuid": "9e1923df-85a6-4b55-bde3-08b7953ef48e",
                            "type": "CRITERIA"
                        },
                        {
                            "uuid": "32083edd-e4ab-400e-a06c-1c6d5957eecf",
                            "type": "CRITERIA"
                        }
                    ],
                "operator": "AND",
                "uuid": "3723416c-83ab-48d0-b0db-aee3c1174af5"
            },
            {
                "identifiers":
                    [
                        {
                            "uuid": "e1cdc9fb-ab2d-4c15-9374-32b2a0de16ce",
                            "type": "CRITERIA"
                        },
                        {
                            "uuid": "3723416c-83ab-48d0-b0db-aee3c1174af5",
                            "type": "REFERENCE"
                        },
                        {
                            "uuid": "8259c681-5dd9-4304-bc48-cf93b00dbfe9",
                            "type": "CRITERIA"
                        }
                    ],
                "operator": "OR",
                "uuid": "4c6daaec-014a-473e-b98b-e58cc82aa081"
            },
            {
                "identifiers":
                    [
                        {
                            "uuid": "4c6daaec-014a-473e-b98b-e58cc82aa081",
                            "type": "REFERENCE"
                        },
                        {
                            "uuid": "1c944f87-b244-459b-ae42-efbcb032a1d3",
                            "type": "CRITERIA"
                        },
                        {
                            "uuid": "9c7b4212-ad88-4817-afb4-f1ef2a21f28e",
                            "type": "CRITERIA"
                        }
                    ],
                "operator": "AND",
                "uuid": "d65a96f0-e90a-4289-8ad8-0eecad0492c0"
            }
        ]
}
const criteria = datacas3.criteria
const listComposition = []
for (const composition of datacas3.composition) {
    let compositionObj = new Composition(composition.operator, composition.uuid)
    for (const identifier of composition.identifiers) {
        if(identifier.type == "CRITERIA") compositionObj.addIdentifier(new IdentifierCriteria((identifier.uuid)))
        if(identifier.type == "REFERENCE") compositionObj.addIdentifier(new IdentifierReference((identifier.uuid)))

    }
    listComposition.push(compositionObj)
}

for (const compo of listComposition) {
    compo.getHumanLanguage(listComposition, criteria)
}

console.log(listComposition[2].humanLanguage)
export default "fro"