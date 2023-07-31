"use strick";

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const COLLECTION_NAME = "Courses";
const DOCUMENT_NAME = "Course";

const courseSchema = new Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 20,
        unique: true,
        required: true,
    },

    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,                
    },

    password: {
        type: String,
        minLength: 6,
        required: true,
    },

    role: {
        type: Array,
        default: [],
    },
    
    status: {
        type: String,
        enum: ["active", "non-active"],
        default: "non-active",
    },

    verify: {
        type: Schema.Types.Boolean,
        default: true,
    }
}, {
    timestamps: true,
    collection: COLLECTION_NAME,
});

const CourseModel = mongoose.model(DOCUMENT_NAME, courseSchema);

export default CourseModel;