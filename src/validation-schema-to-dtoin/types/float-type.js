import ValidationType from "../core/types/validation-type";
import {random} from "../core/random";

export default class FloatType extends ValidationType {

    TYPE_NAME = "floatType";
    UU5_TYPE_NAME = "float";

    generate() {
        return this.resultSolver(() => {
            return this.mapParams({
                "": () => random.decimal(),
                "number": (params) => random.decimal(null, null, params[0]),
                "number, number": (params) => random.decimal(0, params[0], params[1]),
                "number, number, number": (params) => random.decimal(params[0], params[1], params[2])
            });
        });
    }

}