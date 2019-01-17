import ValidationType from "../core/types/validation-type";
import { random } from "../core/random";

export default class StringType extends ValidationType {

    TYPE_NAME = "stringType";
    UU5_TYPE_NAME = "string";

    generate() {
        return this.mapParams({
            "": () => random.string(),
            "regExp": (params) => random.regExp(params[0]),
            "number": (params) => random.string(params[0]),
            "number, number": (params) => random.string(params[0], params[1])
        });
    }

}