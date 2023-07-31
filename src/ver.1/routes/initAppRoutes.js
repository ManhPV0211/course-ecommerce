"use strick";

import accessRoutes from "./accessRoutes.js";

function initAppRoutes(app) {
    app.use("/v1/api/access", accessRoutes)
}

export default initAppRoutes;
