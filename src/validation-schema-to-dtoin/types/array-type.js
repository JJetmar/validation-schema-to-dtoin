import ValidationType from "../core/types/validation-type";
import { random } from "../core/random";
import ShapeType from "./shape-type";

export default class ArrayType extends ValidationType {

    TYPE_NAME = "arrayType";
    UU5_TYPE_NAME = "array";

    generate() {
        return this.mapParams({
            "": () => {
                return this.generateArray();
            },
            "any": (params) => {
                return this.generateArray(params[0]);
            },
            "any, number": (params) => {
                return this.generateArray(params[0], params[1]);
            },
            "any, number, number": (params) => {
                return this.generateArray(params[0], params[1], params[2]);
            }
        });
    }

    generateArray(shape, min, max) { // TODO config
        if (!shape) {
            shape = {
                generate: () => random.object()
            };
        }

        min = min != null ? min : 0;
        if (min < 0) {
            throw new Error("The minimum length for array should be 0 or greater.")
        }

        max = max != null ? max : min + 10;
        if (max < min) {
            throw new Error("The maximum length for array should be greater than minimum.")
        }

        let result = [];
        for (let i = 0; i < random.integer(min, max); i++) {
            result.push(shape.generate());
        }
        return result;
    }

}