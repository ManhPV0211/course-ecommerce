"use strick";

import jwt from "jsonwebtoken";

export const createTokenPair = async (payload, publicKey, privateKey) => {
    const accessToken = jwt.sign(payload, privateKey, {
        algorithm: "RS256",
        expiresIn: "2d",
    });

    const refreshToken = jwt.sign(payload, privateKey, {
        algorithm: "RS256",
        expiresIn: "7d",
    });

    jwt.verify(accessToken, publicKey, (err, decoded) => {
        if(err) {
            console.error(err);
            return {
                code: "mpv-403",
                mesg: "Error verify token..."
            };
        }
        console.log("Success decode ==> ", decoded);
    });

    return { accessToken, refreshToken };
};