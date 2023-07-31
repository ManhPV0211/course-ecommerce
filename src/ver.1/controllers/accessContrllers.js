"use strick";

import accessServices from "../services/accessServices.js";

class AccessControllers {
    register = async (req, res, next) => {
        try {
            res.status(200).json(await accessServices.register(req.body));
        } catch (error) {
            return error
        }
    }
}

export default new AccessControllers();