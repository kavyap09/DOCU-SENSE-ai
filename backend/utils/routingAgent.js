const routingAgent = (
  domain,
  documentType,
  text
) => {

  const lowerText = text.toLowerCase();

  // COMPANY

  if (domain === "company") {

    if (documentType === "Resume") {
      return {
        department: "HR Department",
        routingReason:
          "Candidate profile detected for recruitment review.",
        confidence: "94%",
      };
    }

    if (
      lowerText.includes("invoice") ||
      lowerText.includes("tax")
    ) {
      return {
        department: "Finance Department",
        routingReason:
          "Financial document detected.",
        confidence: "91%",
      };
    }

    return {
      department: "General Administration",
      routingReason:
        "General company document detected.",
      confidence: "80%",
    };
  }

  // HOSPITAL

  if (domain === "hospital") {

    if (
      documentType === "Radiology Report"
    ) {
      return {
        department: "Radiology Department",
        routingReason:
          "Medical scan report detected.",
        confidence: "96%",
      };
    }

    return {
      department: "Reception",
      routingReason:
        "General hospital document detected.",
      confidence: "82%",
    };
  }

  // COLLEGE

  if (domain === "college") {

    if (
      documentType === "Admission Form"
    ) {
      return {
        department: "Admissions Department",
        routingReason:
          "Student admission document detected.",
        confidence: "93%",
      };
    }

    return {
      department: "Administration Office",
      routingReason:
        "General academic document detected.",
      confidence: "80%",
    };
  }

  // BANKING

  if (domain === "banking") {

    if (
      lowerText.includes("loan")
    ) {
      return {
        department: "Loans Department",
        routingReason:
          "Loan-related banking document detected.",
        confidence: "95%",
      };
    }

    return {
      department: "Customer Support",
      routingReason:
        "General banking document detected.",
      confidence: "84%",
    };
  }

  // DEFAULT

  return {
    department: "General Department",
    routingReason:
      "Unable to classify document.",
    confidence: "70%",
  };
};

export default routingAgent;