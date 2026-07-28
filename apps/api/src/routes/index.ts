import { Router } from "express";
import { authController } from "../modules/auth/auth.controller.js";
import { dashboardController } from "../modules/dashboard/dashboard.controller.js";
import { klaviyoController } from "../modules/klaviyo/klaviyo.controller.js";
import { mappingsController } from "../modules/mappings/mappings.controller.js";
import { returnsController } from "../modules/returns/returns.controller.js";
import { shopifyController } from "../modules/shopify/shopify.controller.js";
import { healthController } from "./health.js";

/**
 * All JSON API routes. Webhook routes are mounted separately in app.ts because
 * they require a raw-body parser for HMAC verification.
 */
export const apiRouter = Router();

apiRouter.use("/health", healthController);
apiRouter.use("/auth", authController);
apiRouter.use("/integrations/shopify", shopifyController);
apiRouter.use("/integrations/klaviyo", klaviyoController);
apiRouter.use("/return-mappings", mappingsController);
apiRouter.use("/", returnsController);
apiRouter.use("/dashboard", dashboardController);
