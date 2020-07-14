import ValidationType from "../core/types/validation-type";
import {random} from "../core/random";

export default class IntegerType extends ValidationType {

    TYPE_NAME = "integerType";
    UU5_TYPE_NAME = "integer";

    generate() {
        return this.mapParams({
            "": () => random.integer(),
            "number": (params) => random.integer(params[0]),
            "number|null, number|null": (params) => random.integer(params[0], params[1])
        });
    }

}