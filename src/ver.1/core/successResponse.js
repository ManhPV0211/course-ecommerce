"use strict";

import { ReasonPhrases } from "../utils/reasonPhrases.js";
import { StatusCodes } from "../utils/statusCodes.js";

class SuccessResponse {
    constructor({message, status, reasonStatusCode, meta_data = {}}) {
        this.message = message ? reasonStatusCode : message;
        this.status = status;
        this.reasonStatusCode = reasonStatusCode;
        this.meta_data = meta_data;
    }

    send(res) {
        return res.status(this.status).json(this);
    }
}

class SuccessCreatedResponse extends SuccessResponse {
    constructor({message, status = StatusCodes.CREATED, reasonStatusCode = ReasonPhrases.CREATED, meta_data}) {
        super(message, status, reasonStatusCode, meta_data)
    }
};

export {
    SuccessCreatedResponse
}