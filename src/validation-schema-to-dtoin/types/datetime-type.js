import ValidationType from "../core/types/validation-type";
import {random} from "../core/random";

class DatetimeType extends ValidationType {

    constructor(par1, par2, par3) {
        super();

        this._par1 = par1;
        this._par2 = par2;
        this._par3 = par3;
    }

    generate() {
        return this.resultSolver(() => {
            if (this._par1 == null && this._par2 == null && this._par3 == null) {
                return new Date(random.integer(0, 4294967295000)).toISOString();
            }
        });
    }

}
export default DatetimeType;