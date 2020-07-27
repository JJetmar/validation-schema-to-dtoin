import ValidationModificator from "../core/types/validation-modificator";

class IsRequiredModificator extends ValidationModificator {
    TYPE_NAME = "isRequired";
    name = "isRequired";

    generate() {
        return this.type.generate();
    }

}
export default IsRequiredModificator;