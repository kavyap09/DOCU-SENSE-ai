import fs from "fs";

import pdf from "pdf-parse-fixed";

import Document from "../models/Document.js";

import extractMetadata from "../utils/extractMetadata.js";

import routingAgent from "../utils/routingAgent.js";

/* Upload Document */

export const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    // file path
    const filePath = req.file.path;

    // read file
    const dataBuffer = fs.readFileSync(filePath);

    // parse pdf
    const pdfData = await pdf(dataBuffer);

    // extracted text
    const text = pdfData.text || "";

    // extract metadata
const extractedMetadata =
  extractMetadata(
    text,
    req.user.domain
  );

    // intelligent routing

    const routing =
      routingAgent(
        req.user.domain,
        extractedMetadata.documentType,
        text
      );

    // final metadata object

    const metadata = {

      title:
        extractedMetadata.title,

      summary:
        extractedMetadata.summary,

      keywords:
        extractedMetadata.keywords,

      documentType:
        extractedMetadata.documentType,

      department:
        routing.department,

      routingReason:
        routing.routingReason,

      parties:
        extractedMetadata.parties,

      detectedDate:
        extractedMetadata.detectedDate,

      confidence:
        routing.confidence,
    };

    // save in mongodb

    const document = await Document.create({
      user: req.user._id,

      domain: req.user.domain,

      fileName: req.file.originalname,

      extractedText: text,

      metadata,
    });

    return res.status(201).json({
      message:
        "Document uploaded successfully",

      document,
    });

  } catch (error) {

    console.log("UPLOAD ERROR:");

    console.log(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

/* Fetch Documents */

export const getDocuments = async (req, res) => {
  try {

    const documents = await Document.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(documents);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

// import fs from "fs";
// import pdf from "pdf-parse-fixed";
// import Document from "../models/Document.js";

// /* Upload Document */

// export const uploadDocument = async (req, res) => {
//   try {

//     if (!req.file) {
//       return res.status(400).json({
//         message: "No file uploaded",
//       });
//     }

//     // file path
//     const filePath = req.file.path;

//     // read file
//     const dataBuffer = fs.readFileSync(filePath);

//     // parse pdf
//     const pdfData = await pdf(dataBuffer);

//     // extracted text
//     const text = pdfData.text || "";

//     // metadata
//     const metadata = {
//       title:
//         text.slice(0, 60) || "Untitled Document",

//       summary:
//         text.slice(0, 200) || "No summary generated",

//       keywords: [
//         "PDF",
//         "Metadata",
//         "AI",
//       ],

//       routedTo:
//         req.user.domain || "general",

//       confidence: "92%",
//     };

//     // save in mongodb
//     const document = await Document.create({
//       user: req.user._id,

//       domain: req.user.domain,

//       fileName: req.file.originalname,

//       extractedText: text,

//       metadata,
//     });

//     return res.status(201).json({
//       message:
//         "Document uploaded successfully",

//       document,
//     });

//   } catch (error) {

//     console.log("UPLOAD ERROR:");
//     console.log(error);

//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };

// /* Fetch Documents */

// export const getDocuments = async (req, res) => {
//   try {

//     const documents = await Document.find({
//       user: req.user._id,
//     }).sort({ createdAt: -1 });

//     res.json(documents);

//   } catch (error) {

//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };
// import fs from "fs";
// import pdf from "pdf-parse-fixed";
// import Document from "../models/Document.js";

// /* Upload Document */

// export const uploadDocument = async (req, res) => {
//   try {

//     if (!req.files || req.files.length === 0) {
//       return res.status(400).json({
//         message: "No files uploaded",
//       });
//     }

//     const uploadedDocuments = [];

//     for (const file of req.files) {

//       // file path
//       const filePath = file.path;

//       // read file
//       const dataBuffer = fs.readFileSync(filePath);

//       // parse pdf
//       const pdfData = await pdf(dataBuffer);

//       // extracted text
//       const text = pdfData.text || "";

//       // metadata
//       const metadata = {
//         title:
//           text.slice(0, 60) || "Untitled Document",

//         summary:
//           text.slice(0, 200) || "No summary generated",

//         keywords: [
//           "PDF",
//           "Metadata",
//           "AI",
//         ],

//         routedTo:
//           req.user.domain || "general",

//         confidence: "92%",
//       };

//       // save in mongodb
//       const document = await Document.create({
//         user: req.user._id,

//         domain: req.user.domain,

//         fileName: file.originalname,

//         extractedText: text,

//         metadata,
//       });

//       uploadedDocuments.push(document);
//     }

//     return res.status(201).json({
//       message:
//         "Documents uploaded successfully",

//       documents: uploadedDocuments,
//     });

//   } catch (error) {

//     console.log("UPLOAD ERROR:");
//     console.log(error);

//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// };
// /* Fetch Documents */

// export const getDocuments = async (req, res) => {
//   try {

//     const documents = await Document.find({
//       user: req.user._id,
//     }).sort({ createdAt: -1 });

//     res.json(documents);

//   } catch (error) {

//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };