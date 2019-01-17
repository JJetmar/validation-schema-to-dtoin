import ValidationType from "../core/types/validation-type";
import {random} from "../core/random";

export default class CodeType extends ValidationType {

    TYPE_NAME = "codeType";
    UU5_TYPE_NAME = "code";

    generate() {
        return this.mapParams({
            "": () => random.regExp(/^[0-9a-zA-Z_]{3,64}$/)
        });
    }

}