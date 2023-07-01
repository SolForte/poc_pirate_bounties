import { Router } from "express";
import bountyController from "../controllers/bounty.controller";
import { validateSchemaMiddleware } from "../middleware/schemaValidation.middleware";
import {
  createBountySchema,
  deleteBountySchema,
  updateBountySchema,
} from "../schema/bountySchema";

const bountyRouter = Router();

bountyRouter.post(
  "/bounty",
  validateSchemaMiddleware(createBountySchema),
  bountyController.createPirateBounty
);
bountyRouter.get("/bounty", bountyController.getAllPirateBounties);
bountyRouter.put(
  "/bounty",
  validateSchemaMiddleware(updateBountySchema),
  bountyController.updatePirateBountyByName
);
bountyRouter.delete(
  "/bounty",
  validateSchemaMiddleware(deleteBountySchema),
  bountyController.deletePirateBountyByName
);

export default bountyRouter;
