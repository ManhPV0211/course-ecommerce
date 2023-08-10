"use strick";

import { checkApiKey, checkPermission } from "../auth/apiKeyAuth.js";
import accessRoutes from "./accessRoutes.js";

function initAppRoutes(app) {
    app.use(checkApiKey);
    app.use(checkPermission("000"));
    app.use("/v1/api/access", accessRoutes);
}

export default initAppRoutes;
