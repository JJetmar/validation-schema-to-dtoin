import ValidationType from "../core/types/validation-type";
import random from "../core/random";

export default class MongoIdType extends ValidationType {

    TYPE_NAME = "mongoIdType";
    UU5_TYPE_NAME = "mongoId";

    generate() {
        return this.mapParams({
            "": () => random.hexdec(24, 24)
        });
    }

}