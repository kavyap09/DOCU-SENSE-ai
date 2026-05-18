import express from "express";

import multer from "multer";

import protect from "../middleware/authMiddleware.js";

import {
  uploadDocument,
  getDocuments,
} from "../controllers/documentController.js";

const router = express.Router();

/* Multer Storage */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "-" + file.originalname
    );
  },
});

const upload = multer({ storage });

/* Upload Route */

router.post(
  "/upload",
  protect,
  upload.single("file"),
  uploadDocument
);

/* Fetch Documents Route */

router.get(
  "/",
  protect,
  getDocuments
);

export default router;