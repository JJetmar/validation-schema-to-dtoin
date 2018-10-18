import ValidationType from "../core/types/validation-type";
import { random } from "../core/random";

export default class ArrayType extends ValidationType {

    constructor(par1, par2, par3) {
        super();
        this._par1 = par1;
        this._par2 = par2;
        this._par3 = par3;
    }

    generate() {
        return this.resultSolver(() => {
            let generateType = () => random.object(), minLength = 0, maxLength;
            if (this._par1 != null) {
                generateType = () => this._par1;
            }
            if (this._par2 != null && this._par3 != null) {
                minLength = this._par2;
                maxLength = this._par3;
            } else if (this._par2 != null && this._par3 == null) {
                maxLength = this._par2;
            }
            else {
                maxLength = 10; // TODO to config value
            }

            let length = random.integer(minLength, maxLength);
            let result = [];
            for (let i = 0; i < length; i++) {
                result.push(generateType());
            }
            return result;
        });
    }

}