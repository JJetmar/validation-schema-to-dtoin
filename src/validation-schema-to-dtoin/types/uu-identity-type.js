import ValidationType from "../core/types/validation-type";
import {random} from "../core/random";

class UuIdentityType extends ValidationType {

    constructor() {
        super();
    }

    generate() {
        return this.resultSolver(() => {
            return random.regExp(/^[0-9]{1,4}-[0-9]{1,4}(-[0-9]{1,4}(-[0-9]{1,4})?)?$/);
        });
    }

}
export default UuIdentityType;