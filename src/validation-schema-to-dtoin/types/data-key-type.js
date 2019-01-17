import ValidationType from "../core/types/validation-type";
import { random } from "../core/random";

export default class DataKeyType extends ValidationType {

    TYPE_NAME = "dataKeyType";
    UU5_TYPE_NAME = "dataKey";

    generate() {
        return this.mapParams({
            "": () => random.regExp(/^[0-9a-zA-Z_\-]{3,256}$/)
        });
    }

}