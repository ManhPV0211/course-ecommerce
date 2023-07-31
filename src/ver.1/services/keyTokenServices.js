"use strick";

import KeyTokenModel from "../models/keyTokenModel.js";

class KeyTokenServices {
    createKeyToken = async ({userId, publicKey}) => {
        const publicKeyToString = publicKey.toString();

        const tokens = await KeyTokenModel.create({
            user: userId,
            publicKey: publicKeyToString
        });

        return tokens ? publicKeyToString : null;
    }
};

export default new KeyTokenServices;
