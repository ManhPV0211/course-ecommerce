"use strick";

import _ from "lodash";

export const getInfoData = ({fields = [], object = {}}) => {
    return _.pick(object, fields)
};

export const HEADER = {
    API_KEY: "x-api-key",
    AUTHORIZATION: "authorization"
}