import validationTypeSolver from "./core/validation-type-solver";
import NumberType from "./types/number-type";
import ShapeType from "./types/shape-type";
import StringType from "./types/string-type";
import FloatType from "./types/float-type";
import IdType from "./types/id-type";
import MongoIdType from "./types/mongo-id-type";
import BooleanType from "./types/boolean-type";
import IntegerType from "./types/integer-type";
import UuIdentityType from "./types/uu-identity-type";
import DatetimeType from "./types/datetime-type";
import UriType from "./types/uri-type";
import CodeType from "./types/code-type";
import OneOfType from "./types/one-of-type";
import DataKeyType from "./types/data-key-type";
import ArrayType from "./types/array-type";

const validationTypes = {
    // Basic types
    "string": (...args) => new StringType(args),
    "integer": (...args) => new IntegerType(args),
    "boolean": (...args) => new BooleanType(args),
    "number": (...args) => new NumberType(args),
    "float": (...args) => new FloatType(args),

    // Function types
    "array": (...args) => new ArrayType(args),
    "code": (...args) => new CodeType(args),
    "dataKey": (...args) => new DataKeyType(args),
    "datetime": (...args) => new DatetimeType(args),
    "id": (...args) => new IdType(args),
    "mongoId": (...args) => new MongoIdType(args),
    "oneOf": (...args) => new OneOfType(args),
    "uuIdentity": (...args) => new UuIdentityType(args),
    "uri": (...args) => new UriType(args),

    // Inner Shape
    "shape": (innerShape) => new ShapeType(innerShape)
};

let validationTypeFunctions = "";
for (let type in validationTypes) {
    validationTypeFunctions += "var " + type + "=" + (validationTypes[type].toString() + ";");
}

let generateDtoIn = (schema) => {
    let varName = schema.match(/\s*(const|var|let)\s+(\w+)\s*=/);
    let result = JSON.stringify(eval(validationTypeFunctions + schema + ";" + varName[2]), validationTypeSolver, 2);
    return result;
};

export default generateDtoIn;