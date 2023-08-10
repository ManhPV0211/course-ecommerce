"use strict";

import { HEADER } from "../utils/index.js";
import apiKeyServices from "../services/apiKeyServices.js";

export const checkApiKey = async (req, res, next) => {
    const key = req.headers[HEADER.API_KEY]?.toString();

    if(!key) {
        return res.status(403).json({
            code: "mpv-403",
            mesg: "Forbidden Error..."
        });
    }

    const keyObj = await apiKeyServices.findByKey(key);

    if(!keyObj) {
        return res.status(403).json({
            code: "mpv-403",
            mesg: "Forbidden Error..."
        });
    }

    req.keyObj = keyObj;

    return next();
};

export const checkPermission = (permission) => {
    return (req, res, next) => {

        if(!req.keyObj.permissions) {
            return res.status(403).json({
                code: "mpv-403",
                mesg: "Permisson Denied..."
            });
        }

        const validPermission = req.keyObj.permissions.includes(permission);

        if(!validPermission) {
            return res.status(403).json({
                code: "mpv-403",
                mesg: "Permisson Denied..."
            });
        }

        return next();
    }
}