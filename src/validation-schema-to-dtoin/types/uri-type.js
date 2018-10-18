import ValidationType from "../core/types/validation-type";
import {random} from "../core/random";

class UriType extends ValidationType {

    constructor() {
        super();
    }

    generate() {
        return this.resultSolver(() => {
            return random.regExp(/https?:\/\/(www\.)?[a-z](-?[a-z]{1,4}){3,5}\.(com|cz|co\.uk|uk|de|it|sk)/);
        });
    }

}
export default UriType;
