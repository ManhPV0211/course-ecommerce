"use strick";

class AccessControllers {
    register = async (req, res, next) => {
        try {
            res.send("register api ok")
        } catch (error) {
            return error
        }
    }
}

export default new AccessControllers();