import ValidationType from "../core/types/validation-type";
import random from "../core/random";

export default class DatetimeType extends ValidationType {

    TYPE_NAME = "datetimeType";
    UU5_TYPE_NAME = "datetime";

    generate() {
        return this.mapParams({
            "": () => new Date(random.integer(0, 4294967295000)).toISOString()
        });
    }

}