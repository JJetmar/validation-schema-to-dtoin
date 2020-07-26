import ValidationType from "../core/types/validation-type";
import escapeHtml from "../utils/escape-html";

export default class ShapeType extends ValidationType {

    TYPE_NAME = "shapeType";
    UU5_TYPE_NAME = "shape";

    constructor(inshape) {
        super();
        this.inshape = inshape;
    }

    generate() {
        const msg = (key, value) => `There is no reason for assigning <strong>${escapeHtml(value)}</strong> to the key <strong>${escapeHtml(key)}</strong>. Did you mean to use <strong>any()</strong> or <strong>oneOf([${escapeHtml(value)}])</strong>?`;

        for (const [key, type] of Object.entries(this.inshape)) {
            if (type == null) {
                throw msg(key, type);
            }

            switch (typeof type) {
                case "string":
                case "symbol":
                    throw msg(key, `"${type}"`);
                case "bigint":
                case "number":
                case "boolean":
                    throw msg(key, type);
                case "function":
                    throw `Unable to assign <strong>not called</strong> function <strong>${type.name}</strong> to the key <strong>${key}</strong>. Did you mean to use <strong>${type.name}()</strong>?`;
                case "object":
                    if (!(type instanceof ShapeType)) {
                        throw `Unable to assign object <strong>${type.toString()}</strong> to the key <strong>${key}</strong>.`;
                    }
                    break;
            }
        }
        return this.resultSolver(() => this.inshape);
    }
}