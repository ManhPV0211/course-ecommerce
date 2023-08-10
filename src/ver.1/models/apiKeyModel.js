"use strict";

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const COLLECTION_NAME = "API_Keys";
const DOCUMENT_NAME = "API_Key";

const apiKeySchema = new Schema({
    key: {
        type: String,
        unique: true,
        required: true,
    },

    status: {
        type: Boolean,
        default: true,
    },

    permissions: {
        type: [String],
        enum: ["000", "111", "222"],
        required: true,
    },
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

const ApiKeyModel = mongoose.model(DOCUMENT_NAME, apiKeySchema);

export default ApiKeyModel;