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
    "string": (par1, par2) => new StringType(par1, par2),
    "integer": (par1, par2) => new IntegerType(par1, par2),
    "boolean": () => new BooleanType(),
    "number": (par1, par2) => new NumberType(par1, par2),
    "float": (par1, par2, par3) => new FloatType(par1, par2, par3),

    // Function types
    "array": (par1, par2, par3) => new ArrayType(par1, par2, par3),
    "code": () => new CodeType(),
    "dataKey": () => new DataKeyType(),
    "datetime": () => new DatetimeType(),
    "id": () => new IdType(),
    "mongoId": () => new MongoIdType(),
    "oneOf": (par1) => new OneOfType(par1),
    "uuIdentity": () => new UuIdentityType(),
    "uri": () => new UriType(),

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