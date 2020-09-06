import ValidationType from "../core/types/validation-type";
import random from "../core/random";

export default class Hexa64CodeType extends ValidationType {

    TYPE_NAME = "hexa64CodeType";
    UU5_TYPE_NAME = "hexa64Code";

    generate() {
        return this.mapParams({
            "": () => random.hexdec(64, 64)
        });
    }

}