import ValidationType from "../core/types/validation-type";

class ShapeType extends ValidationType {

    constructor(inshape) {
        super();
        this.inshape = inshape;
    }

    generate() {
        return this.resultSolver(() => this.inshape);
    }

}
export default ShapeType;