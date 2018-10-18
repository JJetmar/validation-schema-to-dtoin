import ValidationModificator from "../../modificator/validation-modificator";

export default class ValidationType {

    resultSolver(result) {
        if (this._isRequired) {
            return result();
        }
        return Math.random() > 0 ? result() : undefined;
    };

    isRequired(dependencies) {
        if (dependencies == null) {
            this._isRequired = true;
        } else {
            throw "Validation function isRequired(...) with dependencies is not implemented yet!";
        }
        return new ValidationModificator(this);
    }

    generate() {

    }
}