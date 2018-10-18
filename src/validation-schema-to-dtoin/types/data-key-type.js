import ValidationType from "../core/types/validation-type";
import { random } from "../core/random";

export default class DataKeyType extends ValidationType {

    constructor(par1) {
        super();
    }

    generate() {
        return this.resultSolver(() => {
            return random.regExp(/^[0-9a-zA-Z_\-]{3,256}$/);
        });
    }

}