import ValidationType from "../core/types/validation-type";
import {random} from "../core/random";

class BooleanType extends ValidationType {

    constructor() {
        super();
    }

    generate() {
        return this.resultSolver(() => {
            return random.boolean();
        });
    }

}
export default BooleanType;