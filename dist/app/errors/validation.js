"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredFieldError = void 0;
class RequiredFieldError extends Error {
    constructor(fieldName) {
        const message = fieldName === undefined
            ? 'FieldName Required'
            : `The field ${fieldName} is required`;
        super(message);
        this.name = 'RequiredFieldError';
    }
}
exports.RequiredFieldError = RequiredFieldError;
