import ValidationModificator from "../../modificator/validation-modificator";

export default class ValidationType {
    TYPE_NAME = "unNamedType";
    UU5_TYPE_NAME = "unNamed";

    constructor(...args) {
        this._params = args[0] || [];
    }

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

    // TODO PRIDAT TYPE INTEGER
    mapParams(params = {}) {
        for (let paramTypes in params) {
            let paramTypesSplitted = paramTypes ? paramTypes.split(/\s*[, ]\s*/) : [];
            if (paramTypesSplitted.length === this._params.length) {
                let result = true;

                for (let i = 0; i < this._params.length; i++) {
                    // alternative types
                    let altResult = false;
                    for (let altType of paramTypesSplitted[i].split(/\|/)) {
                        altResult |= [this.getArgumentType(this._params[i]), "any"].includes(altType);
                        if (altResult) {
                            break;
                        }
                    }
                    result &= altResult;

                }
                if (result) {
                    return this.resultSolver(() => params[paramTypes](this._params));
                }
            }
        }
        this.throwInvalidArgument()
    }

    getArgumentType(obj) {
        let resultType;
        if (obj === null) {
            return "null";
        }
        else if (obj.TYPE_NAME != null) {
            resultType = obj.TYPE_NAME;
        } else if (obj.constructor) {
            resultType = obj.constructor.name.charAt(0).toLowerCase() + obj.constructor.name.slice(1);
        } else {
            resultType = typeof obj;
        }
        return resultType;
    }

    throwInvalidArgument() {
        throw `Undefined signature for <strong>${this.UU5_TYPE_NAME}(${(this._params.map(arg => this.getArgumentType(arg)).join(", "))})</strong>.`;
    }
}