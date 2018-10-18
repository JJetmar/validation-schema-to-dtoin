class ValidationModificator {
    constructor(type) {
        this.type = type;
    }

    generate() {
        return this.type.generate();
    }
}
export default ValidationModificator;