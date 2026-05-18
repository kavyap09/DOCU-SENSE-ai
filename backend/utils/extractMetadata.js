// // const extractMetadata = (text) => {

// //   const lowerText = text.toLowerCase();

// //   let documentType = "General Document";

// //   let keywords = [];

// //   let parties = [];

// //   let detectedDate = "";

// //   // COMPANY

// //   if (
// //     lowerText.includes("resume") ||
// //     lowerText.includes("curriculum vitae") ||
// //     lowerText.includes("skills")
// //   ) {
// //     documentType = "Resume";

// //     keywords.push(
// //       "resume",
// //       "skills",
// //       "education",
// //       "experience"
// //     );
// //   }

// //   // HOSPITAL

// //   else if (
// //     lowerText.includes("x-ray") ||
// //     lowerText.includes("mri") ||
// //     lowerText.includes("scan")
// //   ) {
// //     documentType = "Radiology Report";

// //     keywords.push(
// //       "radiology",
// //       "scan",
// //       "x-ray",
// //       "mri"
// //     );
// //   }

// //   // COLLEGE

// //   else if (
// //     lowerText.includes("admission") ||
// //     lowerText.includes("student")
// //   ) {
// //     documentType = "Admission Form";

// //     keywords.push(
// //       "student",
// //       "admission",
// //       "college"
// //     );
// //   }

// //   // BANKING

// //   else if (
// //     lowerText.includes("loan") ||
// //     lowerText.includes("account")
// //   ) {
// //     documentType = "Banking Document";

// //     keywords.push(
// //       "loan",
// //       "bank",
// //       "account"
// //     );
// //   }

// //   // summary

// //   const summary =
// //     text.slice(0, 180) ||
// //     "No summary generated";

// //   // title

// //   const title =
// //     text.slice(0, 50) ||
// //     "Untitled Document";

// //   return {
// //     title,
// //     summary,
// //     keywords,
// //     documentType,
// //     parties,
// //     detectedDate,
// //   };
// // };

// // export default extractMetadata;
// const extractMetadata = (text) => {

//   const lowerText = text.toLowerCase();

//   let documentType = "General Document";

//   let keywords = [];

//   let parties = [];

//   let detectedDate = "";

//   /* -----------------------------
//      COMPANY DOCUMENTS
//   ------------------------------*/

//   // Resume / CV

//   if (

//     lowerText.includes("resume") ||
//     lowerText.includes("curriculum vitae") ||
//     lowerText.includes("technical skills") ||
//     lowerText.includes("education") ||
//     lowerText.includes("projects") ||
//     lowerText.includes("internship") ||
//     lowerText.includes("experience") ||
//     lowerText.includes("certifications") ||
//     lowerText.includes("cgpa") ||
//     lowerText.includes("objective") ||
//     lowerText.includes("achievements") ||
//     lowerText.includes("linkedin") ||
//     lowerText.includes("github")

//   ) {

//     documentType = "Resume";

//     keywords.push(
//       "resume",
//       "skills",
//       "education",
//       "projects",
//       "experience",
//       "internship",
//       "technical"
//     );
//   }

//   // Invoice

//   else if (

//     lowerText.includes("invoice") ||
//     lowerText.includes("gst") ||
//     lowerText.includes("tax") ||
//     lowerText.includes("payment") ||
//     lowerText.includes("amount due") ||
//     lowerText.includes("bill amount")

//   ) {

//     documentType = "Invoice";

//     keywords.push(
//       "invoice",
//       "finance",
//       "payment",
//       "gst",
//       "tax"
//     );
//   }

//   // Legal Document

//   else if (

//     lowerText.includes("agreement") ||
//     lowerText.includes("contract") ||
//     lowerText.includes("terms and conditions") ||
//     lowerText.includes("legal notice")

//   ) {

//     documentType = "Legal Document";

//     keywords.push(
//       "legal",
//       "contract",
//       "agreement"
//     );
//   }

//   /* -----------------------------
//      HOSPITAL DOCUMENTS
//   ------------------------------*/

//   // Radiology

//   else if (

//     lowerText.includes("x-ray") ||
//     lowerText.includes("mri") ||
//     lowerText.includes("ct scan") ||
//     lowerText.includes("scan report") ||
//     lowerText.includes("radiology") ||
//     lowerText.includes("ultrasound") ||
//     lowerText.includes("impression") ||
//     lowerText.includes("findings")

//   ) {

//     documentType = "Radiology Report";

//     keywords.push(
//       "radiology",
//       "scan",
//       "x-ray",
//       "mri",
//       "ct scan"
//     );
//   }

//   // Prescription

//   else if (

//     lowerText.includes("prescription") ||
//     lowerText.includes("medicine") ||
//     lowerText.includes("tablet") ||
//     lowerText.includes("dosage") ||
//     lowerText.includes("pharmacy")

//   ) {

//     documentType = "Prescription";

//     keywords.push(
//       "prescription",
//       "medicine",
//       "dosage",
//       "pharmacy"
//     );
//   }

//   // Medical Bill

//   else if (

//     lowerText.includes("hospital bill") ||
//     lowerText.includes("insurance") ||
//     lowerText.includes("patient id") ||
//     lowerText.includes("billing")

//   ) {

//     documentType = "Medical Billing Document";

//     keywords.push(
//       "billing",
//       "insurance",
//       "hospital",
//       "patient"
//     );
//   }

//   /* -----------------------------
//      COLLEGE DOCUMENTS
//   ------------------------------*/

//   // Admission

//   else if (

//     lowerText.includes("admission") ||
//     lowerText.includes("application form") ||
//     lowerText.includes("student name") ||
//     lowerText.includes("roll number") ||
//     lowerText.includes("department") ||
//     lowerText.includes("semester")

//   ) {

//     documentType = "Admission Form";

//     keywords.push(
//       "student",
//       "admission",
//       "college",
//       "semester"
//     );
//   }

//   // Marks Memo

//   else if (

//     lowerText.includes("marks memo") ||
//     lowerText.includes("grade sheet") ||
//     lowerText.includes("cgpa") ||
//     lowerText.includes("sgpa") ||
//     lowerText.includes("result")

//   ) {

//     documentType = "Academic Transcript";

//     keywords.push(
//       "marks",
//       "cgpa",
//       "grades",
//       "academic"
//     );
//   }

//   // Fee Receipt

//   else if (

//     lowerText.includes("fee receipt") ||
//     lowerText.includes("tuition fee") ||
//     lowerText.includes("payment receipt")

//   ) {

//     documentType = "Fee Receipt";

//     keywords.push(
//       "fees",
//       "receipt",
//       "accounts"
//     );
//   }

//   /* -----------------------------
//      BANKING DOCUMENTS
//   ------------------------------*/

//   // Loan

//   else if (

//     lowerText.includes("loan") ||
//     lowerText.includes("emi") ||
//     lowerText.includes("interest rate") ||
//     lowerText.includes("borrower")

//   ) {

//     documentType = "Loan Document";

//     keywords.push(
//       "loan",
//       "emi",
//       "finance",
//       "bank"
//     );
//   }

//   // KYC

//   else if (

//     lowerText.includes("aadhaar") ||
//     lowerText.includes("pan card") ||
//     lowerText.includes("kyc") ||
//     lowerText.includes("identity proof")

//   ) {

//     documentType = "KYC Document";

//     keywords.push(
//       "kyc",
//       "aadhaar",
//       "pan",
//       "identity"
//     );
//   }

//   // Fraud Complaint

//   else if (

//     lowerText.includes("fraud") ||
//     lowerText.includes("unauthorized transaction") ||
//     lowerText.includes("complaint")

//   ) {

//     documentType = "Fraud Complaint";

//     keywords.push(
//       "fraud",
//       "complaint",
//       "transaction"
//     );
//   }

//   /* -----------------------------
//      DATE DETECTION
//   ------------------------------*/

//   const dateMatch = text.match(
//     /\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/
//   );

//   if (dateMatch) {
//     detectedDate = dateMatch[0];
//   }

//   /* -----------------------------
//      SIMPLE PARTY DETECTION
//   ------------------------------*/

//   const lines = text.split("\n");

//   parties = lines
//     .filter((line) => line.length > 3)
//     .slice(0, 3);

//   /* -----------------------------
//      SUMMARY
//   ------------------------------*/

//   const cleanText = text
//     .replace(/\s+/g, " ")
//     .trim();

//   const summary =
//     cleanText.slice(0, 220) ||
//     "No summary generated";

//   /* -----------------------------
//      TITLE
//   ------------------------------*/

//   const title =
//     lines[0]?.slice(0, 60) ||
//     "Untitled Document";

//   return {
//     title,
//     summary,
//     keywords,
//     documentType,
//     parties,
//     detectedDate,
//   };
// };

// export default extractMetadata;
const extractMetadata = (
  text,
  domain
) => {

  const lowerText =
    text.toLowerCase();

  let documentType =
    "General Document";

  let keywords = [];

  let parties = [];

  let detectedDate = "";

  /* ===================================
     HOSPITAL DOMAIN
  =================================== */

  if (domain === "hospital") {

    // Radiology Report

    if (

      lowerText.includes("mri") ||
      lowerText.includes("x-ray") ||
      lowerText.includes("radiology") ||
      lowerText.includes("ct scan") ||
      lowerText.includes("ultrasound") ||
      lowerText.includes("scan report") ||
      lowerText.includes("findings") ||
      lowerText.includes("impression") ||
      lowerText.includes("patient id") ||
      lowerText.includes("clinical history")

    ) {

      documentType =
        "Radiology Report";

      keywords.push(
        "radiology",
        "scan",
        "mri",
        "x-ray",
        "hospital"
      );
    }

    // Prescription

    else if (

      lowerText.includes("prescription") ||
      lowerText.includes("medicine") ||
      lowerText.includes("tablet") ||
      lowerText.includes("capsule") ||
      lowerText.includes("dosage") ||
      lowerText.includes("doctor") ||
      lowerText.includes("pharmacy")

    ) {

      documentType =
        "Prescription";

      keywords.push(
        "prescription",
        "medicine",
        "dosage",
        "doctor"
      );
    }

    // Billing

    else if (

      lowerText.includes("insurance") ||
      lowerText.includes("billing") ||
      lowerText.includes("hospital bill") ||
      lowerText.includes("invoice") ||
      lowerText.includes("amount paid")

    ) {

      documentType =
        "Medical Billing Document";

      keywords.push(
        "billing",
        "insurance",
        "invoice",
        "payment"
      );
    }

    // Appointment

    else if (

      lowerText.includes("appointment") ||
      lowerText.includes("consultation") ||
      lowerText.includes("schedule")

    ) {

      documentType =
        "Appointment Document";

      keywords.push(
        "appointment",
        "consultation",
        "schedule"
      );
    }
  }

  /* ===================================
     COMPANY DOMAIN
  =================================== */

  else if (domain === "company") {

    // Resume

    if (

      lowerText.includes("resume") ||
      lowerText.includes("curriculum vitae") ||
      lowerText.includes("technical skills") ||
      lowerText.includes("internship") ||
      lowerText.includes("github") ||
      lowerText.includes("linkedin") ||
      lowerText.includes("projects") ||
      lowerText.includes("work experience") ||
      lowerText.includes("certifications") ||

      (

        lowerText.includes("education") &&
        lowerText.includes("skills") &&
        lowerText.includes("experience")

      )

    ) {

      documentType = "Resume";

      keywords.push(
        "resume",
        "skills",
        "projects",
        "experience",
        "internship"
      );
    }

    // Invoice

    else if (

      lowerText.includes("invoice") ||
      lowerText.includes("gst") ||
      lowerText.includes("tax") ||
      lowerText.includes("payment") ||
      lowerText.includes("amount due")

    ) {

      documentType =
        "Invoice";

      keywords.push(
        "invoice",
        "tax",
        "payment",
        "finance"
      );
    }

    // Legal

    else if (

      lowerText.includes("agreement") ||
      lowerText.includes("contract") ||
      lowerText.includes("terms and conditions") ||
      lowerText.includes("legal notice")

    ) {

      documentType =
        "Legal Document";

      keywords.push(
        "contract",
        "agreement",
        "legal"
      );
    }

    // Project Report

    else if (

      lowerText.includes("project report") ||
      lowerText.includes("implementation") ||
      lowerText.includes("system design")

    ) {

      documentType =
        "Project Report";

      keywords.push(
        "project",
        "implementation",
        "design"
      );
    }
  }

  /* ===================================
     COLLEGE DOMAIN
  =================================== */

  else if (domain === "college") {

    // Admission Form

    if (

      lowerText.includes("admission") ||
      lowerText.includes("application form") ||
      lowerText.includes("student name") ||
      lowerText.includes("roll number") ||
      lowerText.includes("semester")

    ) {

      documentType =
        "Admission Form";

      keywords.push(
        "student",
        "admission",
        "college"
      );
    }

    // Transcript

    else if (

      lowerText.includes("cgpa") ||
      lowerText.includes("sgpa") ||
      lowerText.includes("marks memo") ||
      lowerText.includes("grade sheet") ||
      lowerText.includes("academic result")

    ) {

      documentType =
        "Academic Transcript";

      keywords.push(
        "cgpa",
        "grades",
        "academic"
      );
    }

    // Fee Receipt

    else if (

      lowerText.includes("fee receipt") ||
      lowerText.includes("tuition fee") ||
      lowerText.includes("payment receipt")

    ) {

      documentType =
        "Fee Receipt";

      keywords.push(
        "fees",
        "receipt",
        "accounts"
      );
    }

    // Placement Resume

    else if (

      lowerText.includes("resume") ||
      lowerText.includes("internship") ||
      lowerText.includes("placement")

    ) {

      documentType =
        "Placement Resume";

      keywords.push(
        "placement",
        "resume",
        "student"
      );
    }
  }

  /* ===================================
     BANKING DOMAIN
  =================================== */

  else if (domain === "banking") {

    // Loan

    if (

      lowerText.includes("loan") ||
      lowerText.includes("emi") ||
      lowerText.includes("interest rate") ||
      lowerText.includes("borrower")

    ) {

      documentType =
        "Loan Document";

      keywords.push(
        "loan",
        "emi",
        "bank"
      );
    }

    // KYC

    else if (

      lowerText.includes("aadhaar") ||
      lowerText.includes("pan card") ||
      lowerText.includes("kyc") ||
      lowerText.includes("identity proof")

    ) {

      documentType =
        "KYC Document";

      keywords.push(
        "aadhaar",
        "pan",
        "identity"
      );
    }

    // Fraud Complaint

    else if (

      lowerText.includes("fraud") ||
      lowerText.includes("unauthorized transaction") ||
      lowerText.includes("complaint")

    ) {

      documentType =
        "Fraud Complaint";

      keywords.push(
        "fraud",
        "complaint",
        "transaction"
      );
    }

    // Account Statement

    else if (

      lowerText.includes("account statement") ||
      lowerText.includes("transaction history") ||
      lowerText.includes("available balance")

    ) {

      documentType =
        "Account Statement";

      keywords.push(
        "statement",
        "transaction",
        "balance"
      );
    }
  }

  /* ===================================
     DATE DETECTION
  =================================== */

  const dateMatch = text.match(
    /\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/
  );

  if (dateMatch) {
    detectedDate = dateMatch[0];
  }

  /* ===================================
     PARTY DETECTION
  =================================== */

  const lines = text.split("\n");

  parties = lines
    .filter((line) => line.trim().length > 3)
    .slice(0, 3);

  /* ===================================
     SUMMARY
  =================================== */

  const cleanText = text
    .replace(/\s+/g, " ")
    .trim();

  const summary =
    cleanText.slice(0, 220) ||
    "No summary generated";

  /* ===================================
     TITLE
  =================================== */

  const title =
    lines[0]?.trim().slice(0, 60) ||
    "Untitled Document";

  return {
    title,
    summary,
    keywords,
    documentType,
    parties,
    detectedDate,
  };
};

export default extractMetadata;