import ValidationType from "../core/types/validation-type";
import {random} from "../core/random";

class FloatType extends ValidationType {

    constructor(par1, par2, par3) {
        super();

        this._par1 = par1;
        this._par2 = par2;
        this._par3 = par3;
    }

    generate() {
        return this.resultSolver(() => {
            if (this._par1 == null && this._par2 == null && this._par3 == null) {
                return random.decimal();
            } else if (this._par1 != null && this._par2 == null && this._par3 == null) {
                return random.decimal(null, null, this._par1);
            } else if (this._par1 != null && this._par2 != null && this._par3 == null) {
                return random.decimal(0, this._par1, this._par2);
            } else if (this._par1 != null && this._par2 != null && this._par3 != null) {
                return random.decimal(this._par1, this._par2, this._par3);
            }
            // TODO Throw error
        });
    }

}
export default FloatType;