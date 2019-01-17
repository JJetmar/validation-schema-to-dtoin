import ValidationType from "../core/types/validation-type";
import { random } from "../core/random";

export default class OneOfType extends ValidationType {

    TYPE_NAME = "oneOfType";
    UU5_TYPE_NAME = "oneOf";

    generate() {
        return this.mapParams({
            "array": (params) => {
                let index = random.integer(0, params[0].length - 1);
                return params[0][index];
            }
        });
    }

}