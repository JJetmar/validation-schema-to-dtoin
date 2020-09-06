import ValidationType from "../core/types/validation-type";
import random from "../core/random";

export default class NumberType extends ValidationType {

    TYPE_NAME = "numberType";
    UU5_TYPE_NAME = "number";

    generate() {
        return this.mapParams({
            "number. number": (params) => random.decimal(params[2], params[1])
        });
    }
}