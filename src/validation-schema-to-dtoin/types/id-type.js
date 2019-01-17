import ValidationType from "../core/types/validation-type";
import {random} from "../core/random";

export default class IdType extends ValidationType {

    TYPE_NAME = "idType";
    UU5_TYPE_NAME = "id";

    generate() {
        return this.mapParams({
            "": () => random.regExp(/^([0-9a-f]{24})|([0-9a-f]{32})$/)
        });
    }

}