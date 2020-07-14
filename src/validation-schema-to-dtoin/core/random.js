import * as RandExp from "randexp";

class Random {

    constructor() {
        Random._seed = 0;
        RandExp.prototype.randInt = (min, max) => this.integer(min, max);
    }

    setSeed(seed) {
        let valueToSeed = seed.toString();
        let hash = 0, i, chr;
        if (valueToSeed.length === 0) Random._seed = hash;
        for (i = 0; i < valueToSeed.length; i++) {
            chr = valueToSeed.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        Random._seed = hash;
    }

    _nextSeed() {
        return Random._seed = (Random._seed * 21) | 0;
    }

    integer(par1, par2) {
        let min, max;
        if (par1 != null && par2 != null) {
           min = par1;
           max = par2;
        } else if (par1 != null && par2 === undefined) {
            min = 0;
            max = par1;
        }
        if (min == null) {
            min = -10000; // TODO to config value
        }
        if (max == null) {
            max = 10000; // TODO to config value
        }

        // TODO fix random function
        let s = 0.5 + 0.5 * Math.sin(Random.prototype._nextSeed());
        let res = min + (Math.round(s * (max - min)));
        return res;
    }

    decimal(par1, par2, par3) {
        let min, max;
        let precision = (par3 != null ? par3 : 6); // TODO to config value

        if (par1 !== undefined && par2 !== undefined) {
            min = par1;
            max = par2;
        } else if (par1 !== undefined && par2 === undefined) {
            min = 0;
            max = par1;
        }

        if (min == null) {
            min = -10000; // TODO to config value
        }
        if (max == null) {
            max = 10000; // TODO to config value
        }

        let precisionMultiplier = Math.pow(10, precision);
        let multipliedMin = Math.ceil(min * precisionMultiplier);
        let multipliedMax = Math.floor(max * precisionMultiplier);

        return this.integer(multipliedMin, multipliedMax) / precisionMultiplier;
    }

    boolean() {
        return this.integer(0, 1) === 0;
    }

    string(par1, par2) {
        let minLength = (par1 != null && par2 !== undefined ? par1 : 0);
        let maxLength = par2 !== undefined ? par2 : par1 || 100; // TODO to config value
        let finalLength = minLength === maxLength ? minLength : minLength + "," + maxLength;

        return this.regExp(new RegExp("[a-zA-Z0-9]{" + finalLength +"}")); // TODO to config value
    }

    regExp(regularExpression) {
        return new RandExp(regularExpression).gen();
    }

    hexdec(par1, par2) {
        let min = par1 != null && par2 != null ? par1 : 0;
        let max = par1 != null && par2 != null ? par2 : 32;
        let finalLength = par1 === par2 ? min : min + "," + max;

        return this.regExp(new RegExp("[0-9a-f]{" + finalLength + "}"));
    }

    object() {
        // TODO
        return {
            name: "random Object",
            randomValue: 42
        }
    }
}
export let random = new Random();