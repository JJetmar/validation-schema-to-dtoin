import ValidationType from "../core/types/validation-type";
import {random} from "../core/random";

class IdType extends ValidationType {

    constructor() {
        super();
    }

    generate() {
        //return random.regExp(/^(?=[0-9a-f]+$)(.{24}|.{32})$/);
        throw "Validation type id() was not implemented yet.";
    }

}
export default IdType;