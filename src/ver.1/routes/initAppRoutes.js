"use strick";

import accessRoutes from "./accessRoutes.js";

function initAppRoutes(app) {
    app.use("/api/v1/access", accessRoutes)
}

export default initAppRoutes;
