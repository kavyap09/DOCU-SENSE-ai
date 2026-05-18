import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  selectDomain,
} from "../controllers/domainController.js";

const router = express.Router();

router.post("/select", protect, selectDomain);

export default router;