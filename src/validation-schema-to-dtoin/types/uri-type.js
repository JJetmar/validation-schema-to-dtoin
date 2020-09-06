import ValidationType from "../core/types/validation-type";
import random from "../core/random";

export default class UriType extends ValidationType {

    TYPE_NAME = "uriType";
    UU5_TYPE_NAME = "uri";

    generate() {
        return this.mapParams({
            "": () => random.regExp(/https?:\/\/(www\.)?[a-z](-?[a-z]{1,4}){3,5}\.(com|cz|co\.uk|uk|de|it|sk)/)
        });
    }

}