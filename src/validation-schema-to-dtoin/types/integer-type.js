import ValidationType from "../core/types/validation-type";
import {random} from "../core/random";

class IntegerType extends ValidationType {

    constructor(par1, par2) {
        super();

        this._par1 = par1;
        this._par2 = par2;
    }

    generate() {
        return this.resultSolver(() => {
            return random.integer(this._par1, this._par2);
        });
    }

}
export default IntegerType;