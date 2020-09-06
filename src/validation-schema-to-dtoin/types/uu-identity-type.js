import ValidationType from "../core/types/validation-type";
import random from "../core/random";

export default class UuIdentityType extends ValidationType {

    TYPE_NAME = "uuIdentityType";
    UU5_TYPE_NAME = "uuIdentity";

    generate() {
        return this.mapParams({
            "": () => random.regExp(/^[0-9]{1,4}-[0-9]{1,4}(-[0-9]{1,4}(-[0-9]{1,4})?)?$/)
        });
    }

}