import ValidationType from "../core/types/validation-type";
import {random} from "../core/random";

class CodeType extends ValidationType {

    constructor(par1, par2, par3) {
        super();
    }

    generate() {
        return this.resultSolver(() => {
            return random.regExp(/^[0-9a-zA-Z_]{3,64}$/);
        });
    }

}
export default CodeType;