"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredBuffer = exports.RequiredString = exports.Required = void 0;
const validation_1 = require("../errors/validation");
class Required {
    constructor(value, fieldName) {
        this.value = value;
        this.fieldName = fieldName;
    }
    validate() {
        if (this.value === null || this.value === undefined) {
            return new validation_1.RequiredFieldError(this.fieldName);
        }
    }
}
exports.Required = Required;
class RequiredString extends Required {
    constructor(value, fieldName) {
        super(value, fieldName);
        this.value = value;
        this.fieldName = fieldName;
    }
    validate() {
        if (super.validate() !== undefined || this.value === '') {
            return new validation_1.RequiredFieldError(this.fieldName);
        }
    }
}
exports.RequiredString = RequiredString;
class RequiredBuffer extends Required {
    constructor(value, fieldName) {
        super(value, fieldName);
        this.value = value;
        this.fieldName = fieldName;
    }
    validate() {
        if (super.validate() !== undefined || this.value.length === 0) {
            return new validation_1.RequiredFieldError(this.fieldName);
        }
    }
}
exports.RequiredBuffer = RequiredBuffer;
