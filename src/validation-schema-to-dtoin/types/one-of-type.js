import ValidationType from "../core/types/validation-type";
import { random } from "../core/random";

export default class OneOfType extends ValidationType {

    TYPE_NAME = "oneOfType";
    UU5_TYPE_NAME = "oneOf";

    generate() {
        return this.mapParams({
            "array": (params) => {
                const numOfParams = params[0].length;
                if (numOfParams === 0) {
                    throw `There is no reason for assigning <strong>empty array</strong> into <strong>oneOf([])</strong> validation type. Did you mean to use <strong>oneOf([null])</strong>?`
                }

                let index = random.integer(0, numOfParams - 1);
                return params[0][index];
            }
        });
    }

}