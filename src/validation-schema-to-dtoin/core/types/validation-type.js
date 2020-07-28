import IsRequiredModificator from "../../modificator/is-required";

export default class ValidationType {
    TYPE = "validationType"
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
            // TODO do warning emitter
            //throw "Validation function isRequired(...) with dependencies is not implemented yet!";
            console.warn("Validation function isRequired(...) with dependencies is not implemented yet!");
        }
        return new IsRequiredModificator(this);
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
                        const argumentTypes = this.getArgumentTypes(this._params[i]);
                        altResult |= [...argumentTypes, "any"].includes(altType);
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

    getArgumentTypes(obj) {
        const resultTypes = [];

        if (obj === null) {
            resultTypes.push("null");
        } else {
            if (obj.TYPE_NAME != null) {
                resultTypes.push(obj.TYPE_NAME);
            }
            if (obj.constructor) {
                const instanceType = obj.constructor.name.charAt(0).toLowerCase() + obj.constructor.name.slice(1);
                if (instanceType === "number") {
                    if (Math.floor(obj) === obj) {
                        resultTypes.push("integer");
                    } else {
                        resultTypes.push("float");
                    }
                }
                resultTypes.push(instanceType);
            }
            if (obj.TYPE) {
                resultTypes.push(obj.TYPE);
            }
            const primitiveType = typeof obj;

            resultTypes.push(primitiveType);
        }
        return resultTypes;
    }

    throwInvalidArgument() {
        throw `Undefined signature for <strong>${this.UU5_TYPE_NAME}(&lt;${(this._params.map(arg => this.getArgumentTypes(arg)[0]).join("&gt;, &lt;"))}&gt;)</strong>.`;
    }
}