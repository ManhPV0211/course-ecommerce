"use strick";

import crypto from "crypto";
import bcrypt from "bcrypt";

import { getInfoData } from "../utils/index.js";
import CourseModel from "../models/courseModel.js";
import { createTokenPair } from "../auth/jwtAuth.js";
import keyTokenServices from "./keyTokenServices.js";

const COURSE_ROLE = {
    ADMIN: "001",
    WRITER: "002",
    EDITOR: "003",
};

class AccessServices {
    register = async ({name, email, password}) => {
        try {
            const emailExists = await CourseModel.findOne({email}).lean();

            if(emailExists) {
                return {
                    code: "mpv-409",
                    mesg: "Email is already exists..."
                };
            }

            const passwordHash = bcrypt.hashSync(password, 10);

            const newCourse = await CourseModel.create({
                name,
                email,
                password: passwordHash,
                role: [COURSE_ROLE.ADMIN]
            });

            if(!newCourse) {
                return {
                    code: "mpv-400",
                    mesg: "Error create new Course"
                };
            }

            const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
                modulusLength: 4096,
                publicKeyEncoding: {
                    format: "pem",
                    type: "spki",
                },
                privateKeyEncoding: {
                    format: "pem",
                    type: "pkcs8"
                },
            });

            console.log({publicKey, privateKey});

            const publicKeyToString = await keyTokenServices.createKeyToken({
                userId: newCourse._id,
                publicKey,
            });

            const tokens = await createTokenPair({
                user: newCourse._id,
                email: newCourse.email
            }, publicKeyToString, privateKey);

            if(!tokens) {
                return {
                    code: "mpv-400",
                    mesg: "Error create tokens pair"
                };
            }

            return {
                code: "mpv-201",
                mesg: "Success create new course",
                metaData: {
                    newCourse: getInfoData({
                        fields: ["_id", "name", "email"],
                        object: newCourse
                    }),
                    tokens
                }
            }
        } catch (error) {
            return {
                code: "mpv-4xx",
                mesg: error.message
            }
        }
    }
};

export default new AccessServices;