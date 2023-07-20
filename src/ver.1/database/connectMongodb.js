"use strick";

import mongoose from "mongoose";

const mongodbURI = "mongodb://127.0.0.1:27017/courseDEV"
class Database {
    constructor() {
        this.connect()
    }

    connect() {
        mongoose.connect(mongodbURI)
            .then(() => console.log("Success connect to MongoDB"))
            .catch(() => console.log("False to connect to MongoDB"))

        mongoose.set("debug", true);
        mongoose.set("debug", {color: true});
        mongoose.set("debug", function(colectionName, methodName, ...methodArgs) {
            console.log(
                `MongoDB Debug: ${this.conn.name} => ${colectionName}--${methodName}--${JSON.stringify(methodArgs)}`
            )
        })
    }

    static getConnectionMongoDB() {
        if(!Database.instance) {
            Database.getConnectionMongoDB = new Database()
        }
        return Database.instance
    }
};

export default Database;