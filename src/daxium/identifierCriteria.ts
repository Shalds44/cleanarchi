export class IdentifierCriteria {
    uuid: String
    constructor(uuid: String) {
        this.uuid = uuid
    }

    getCriteriaName(criteria: array): string{
        const result = criteria.filter(item => item.uuid == this.uuid)
        return result[0].name
    }
}