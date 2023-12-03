
const datacas1 = {
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
const criterias = datacas1.criteria
const compositions = datacas1.composition
const criteriaName = []
const resultCas1 = []
let operator = null
for (const compositon of compositions) {
    operator = compositon.operator
    for(const identifier of compositon.identifiers) {

        if(identifier.type == 'CRITERIA'){
            const criteraname = criterias.filter(item => item.uuid == identifier.uuid)
            criteriaName.push(criteraname[0].name)
        }
    }
    resultCas1.push("(")
    for (let i = 0; i < criteriaName.length; i++) {
        resultCas1.push(criteriaName[i])
        if(i != criteriaName.length -1){
            resultCas1.push(operator)
        }
    }
    resultCas1.push(")")
}


const datacas2 = {
    "criteria":[
        {
            "uuid":"9c7b4212-ad88-4817-afb4-f1ef2a21f28e",
            "name":"critère_1"
        },
        {
            "uuid":"1c944f87-b244-459b-ae42-efbcb032a1d3",
            "name":"critère_2"
        },
        {
            "uuid":"8259c681-5dd9-4304-bc48-cf93b00dbfe9",
            "name":"critère_3"
        },
        {
            "uuid":"e1cdc9fb-ab2d-4c15-9374-32b2a0de16ce",
            "name":"critère_4"
        },
        {
            "uuid":"01776afc-9332-4105-ba7e-ac2374ff2267",
            "name":"critère_5"
        },
        {
            "uuid":"9e1923df-85a6-4b55-bde3-08b7953ef48e",
            "name":"critère_6"
        },
        {
            "uuid":"32083edd-e4ab-400e-a06c-1c6d5957eecf",
            "name":"critère_7"
        }
    ],
    "composition":[
        {
            "identifiers":
                [
                    {
                        "uuid": "9c7b4212-ad88-4817-afb4-f1ef2a21f28e",
                        "type": "CRITERIA"
                    },
                    {
                        "uuid": "1c944f87-b244-459b-ae42-efbcb032a1d3",
                        "type": "CRITERIA"
                    }
                ],
            "operator": "AND",
            "uuid": "d65a96f0-e90a-4289-8ad8-0eecad0492c0"
        },
        {
            "identifiers":
                [
                    {
                        "uuid": "9c7b4212-ad88-4817-afb4-f1ef2a21f28e",
                        "type": "CRITERIA"
                    },
                    {
                        "uuid": "d65a96f0-e90a-4289-8ad8-0eecad0492c0",
                        "type": "REFERENCE"
                    }
                ],
            "operator": "OR",
            "uuid": "dd72e1e0-89e6-4d6d-b1ad-ef11e4740681"
        }
    ]
}
const criterias2 = datacas2.criteria
const compositions2 = datacas2.composition
console.log(datacas2)
const criteriaName2 = []
const criteriaUuid2 = []
const identifierUuidReference = []
let operator2 = null
const blockIdentifier = []
const resultCas2 = []

for (const compositon of compositions2) {
    operator2 = compositon.operator
    for(const identifier of compositon.identifiers) {

        if(identifier.type == 'CRITERIA'){
            const criteraname2 = criterias.filter(item => item.uuid == identifier.uuid)
            criteriaName2.push(criteraname2.name)
            criteriaUuid2.push(criteraname2.uuid)
        }else{
            identifierUuidReference.push(identifier.uuid)
        }
    }
    blockIdentifier.push("(")
    for (let i = 0; i < criteriaName.length; i++) {
        resultCas2.push(criteriaName[i])
        if(i != criteriaName.length -1){
            resultCas2.push(operator2)
        }
    }
    blockIdentifier.push(")")
}

console.log(resultCas2.join(" "))

export default "fro"