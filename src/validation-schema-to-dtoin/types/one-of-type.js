import ValidationType from "../core/types/validation-type";
import { random } from "../core/random";

export default class OneOfType extends ValidationType {

    constructor(par1) {
        super();
        this._par1 = par1;
    }

    generate() {
        return this.resultSolver(() => {
            if (this._par1 instanceof Array && this._par1.length > 0) {
                let index = random.integer(0, this._par1.length - 1);
                return this._par1[index];
            }
        });
    }

}