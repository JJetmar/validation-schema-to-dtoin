import ValidationType from "../core/types/validation-type";
import {random} from "../core/random";

class MongoIdType extends ValidationType {

    constructor() {
        super();
    }

    generate() {
        return this.resultSolver(() => {
            return random.regExp(/^[0-9a-f]{24}$/);
        });
    }

}
export default MongoIdType;