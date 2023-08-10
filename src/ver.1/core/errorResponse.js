"use strict";

import { ReasonPhrases } from "../utils/reasonPhrases.js";
import { StatusCodes } from "../utils/statusCodes.js";

class ErrorResponse extends Error {
    constructor(message, status) {
        super(message);
        this.status = status
    }
};

class ErrorConflictResponse extends ErrorResponse {
    constructor(message = ReasonPhrases.CONFLICT, statusCode = StatusCodes.CONFLICT) {
        super(message, statusCode)
    }
}

export {
    ErrorConflictResponse
}