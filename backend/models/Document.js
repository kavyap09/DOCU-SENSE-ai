// import mongoose from "mongoose";

// const documentSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },

//     domain: String,

//     fileName: String,

//     extractedText: String,

//     metadata: {
//       title: String,

//       summary: String,

//       keywords: [String],

//       routedTo: String,

//       confidence: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model(
//   "Document",
//   documentSchema
// );
import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    domain: String,

    fileName: String,

    extractedText: String,

    metadata: {

      title: String,

      summary: String,

      keywords: [String],

      documentType: String,

      department: String,

      routingReason: String,

      parties: [String],

      detectedDate: String,

      confidence: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Document",
  documentSchema
);