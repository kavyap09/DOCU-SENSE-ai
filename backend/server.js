// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";

// import connectDB from "./config/db.js";

// import authRoutes from "./routes/authRoutes.js";
// import domainRoutes from "./routes/domainRoutes.js";
// import documentRoutes from "./routes/documentRoutes.js";

// dotenv.config();

// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());

// /* Routes */
// app.use("/api/auth", authRoutes);

// app.use("/api/domain", domainRoutes);

// app.use("/api/documents", documentRoutes);

// /* Test Route */
// app.get("/", (req, res) => {
//   res.send("DocuSense Backend Running");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on ${PORT}`);
// });
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import domainRoutes from "./routes/domainRoutes.js";
import documentRoutes from "./routes/documentRoutes.js";

dotenv.config();

/* Connect Database */
connectDB();

const app = express();

/* Middleware */
app.use(cors({
  origin: "https://docusenseai-summersaas.netlify.app",
  credentials: true,
}));

app.use(express.json());

/* Routes */
app.use("/api/auth", authRoutes);

app.use("/api/domain", domainRoutes);

app.use("/api/documents", documentRoutes);

/* Test Route */
app.get("/", (req, res) => {
  res.send("DocuSense Backend Running");
});

/* Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});