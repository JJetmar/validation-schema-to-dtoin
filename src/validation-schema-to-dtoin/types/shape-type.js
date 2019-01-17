import ValidationType from "../core/types/validation-type";

export default class ShapeType extends ValidationType {

    TYPE_NAME = "shapeType";
    UU5_TYPE_NAME = "shape";

    constructor(inshape) {
        super();
        this.inshape = inshape;
    }

    generate() {
        return this.resultSolver(() => this.inshape);
    }
}