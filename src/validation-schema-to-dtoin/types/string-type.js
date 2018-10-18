import ValidationType from "../core/types/validation-type";
import { random } from "../core/random";

export default class StringType extends ValidationType {

    constructor(par1, par2) {
        super();

        this._par1 = par1;
        this._par2 = par2;
    }

    generate() {
        return this.resultSolver(() => {
            if (this._par1 instanceof RegExp) {
                return random.regExp(this._par1);
            }
            else {
                return random.string(this._par1, this._par2);
            }
        });
    }

}