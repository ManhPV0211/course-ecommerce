"use strict";

import ApiKeyModel from "../models/apiKeyModel.js";

class ApiKeyServices {
    findByKey = async (key) => {
        const keyObj = await ApiKeyModel.findOne({key}).lean();
        return keyObj;
    }
}

export default new ApiKeyServices();