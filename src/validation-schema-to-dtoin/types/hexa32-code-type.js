import ValidationType from "../core/types/validation-type";
import random from "../core/random";

export default class Hexa32CodeType extends ValidationType {

    TYPE_NAME = "hexa32CodeType";
    UU5_TYPE_NAME = "hexa32Code";

    generate() {
        return this.mapParams({
            "": () => random.hexdec(32, 32)
        });
    }

}