"use strick";

class AccessServices {
    register = async ({name, email, password}) => {
        try {
            
        } catch (error) {
            return {
                code: "mpv-4xx",
                mesg: error.message
            }
        }
    }
}