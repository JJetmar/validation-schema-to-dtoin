import ValidationType from "../core/types/validation-type";
import random from "../core/random";

export default class BooleanType extends ValidationType {

    TYPE_NAME = "booleanType";
    UU5_TYPE_NAME = "boolean";

    generate() {
        return this.mapParams({
            "": () => random.boolean()
        });
    }

}