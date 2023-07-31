"use strick";

import mongoose from "mongoose";

const COLLECTION_NAME = "KeyTokens";
const DOCUMENT_NAME = "KeyToken";

const Schema = mongoose.Schema;

const keyTokenSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Course",
    },

    publicKey: {
        type: String,
        required: true,
    },

    refreshToken: {
        type: Array,
        default: [],
    },
}, {
    timestamps: true,
    collection: COLLECTION_NAME,
});

const KeyTokenModel = mongoose.model(DOCUMENT_NAME, keyTokenSchema);

export default KeyTokenModel;
