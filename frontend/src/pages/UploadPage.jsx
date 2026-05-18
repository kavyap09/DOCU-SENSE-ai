// import { useState } from "react";

// import { UploadCloud } from "lucide-react";

// import API from "../services/api";

// function UploadPage() {

//   const [selectedFile, setSelectedFile] = useState(null);

//   const [loading, setLoading] = useState(false);

//   const [uploadedDoc, setUploadedDoc] = useState(null);

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {

//     if (!selectedFile) {
//       return alert("Please select a PDF file");
//     }

//     try {

//       setLoading(true);

//       const token = localStorage.getItem("token");

//       const formData = new FormData();

//       formData.append("file", selectedFile);

//       const response = await API.post(
//         "/documents/upload",
//         formData,
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type":
//               "multipart/form-data",
//           },
//         }
//       );

//       setUploadedDoc(response.data.document);

//       alert("Document analyzed successfully");

//       setSelectedFile(null);

//     } catch (error) {

//       console.log(error);

//       alert("Upload failed");

//     } finally {

//       setLoading(false);
//     }
//   };

//   return (
//     <div>

//       {/* Heading */}

//       <h1 className="text-[26px] font-semibold tracking-tight">
//         Upload document
//       </h1>

//       <p className="text-gray-400 text-[13px] mt-1">
//         Drag a PDF or DOCX file. We'll extract metadata and route it within your domain.
//       </p>

//       {/* Upload Box */}

//       <label className="mt-7 border-2 border-dashed border-[#1B2237] rounded-[28px] h-[280px] bg-[#0B1220] flex flex-col items-center justify-center cursor-pointer hover:border-[#6C7BFF]/40 transition">

//         <input
//           type="file"
//           accept=".pdf,.doc,.docx"
//           hidden
//           onChange={handleFileChange}
//         />

//         <div className="w-14 h-14 rounded-3xl bg-[#182241] flex items-center justify-center">
//           <UploadCloud
//             size={24}
//             className="text-[#6C7BFF]"
//           />
//         </div>

//         <h2 className="text-[18px] font-semibold mt-5">
//           Drop your file here, or click to browse
//         </h2>

//         <p className="text-gray-500 text-[13px] mt-2">
//           PDF or DOCX • up to 20MB
//         </p>

//         {selectedFile && (
//           <div className="mt-5 px-4 py-2 rounded-2xl bg-[#111827] border border-[#1B2237] text-[13px] text-gray-300">
//             {selectedFile.name}
//           </div>
//         )}
//       </label>

//       {/* Button */}

//       <div className="flex justify-end mt-5">

//         <button
//           onClick={handleUpload}
//           disabled={loading}
//           className={`
//             px-5 py-2.5 rounded-2xl text-[13px] font-medium transition
//             ${
//               loading
//                 ? "bg-[#2B3247] text-gray-400 cursor-not-allowed"
//                 : "bg-[#6C7BFF] hover:bg-[#5B6AF0] text-white"
//             }
//           `}
//         >
//           {loading
//             ? "Analyzing..."
//             : "Analyze document"}
//         </button>
//       </div>

//       {/* Metadata Card */}

//       {uploadedDoc && (
//         <div className="bg-[#0B1220] border border-[#1B2237] rounded-[28px] p-7 mt-7">

//           <div className="flex items-center justify-between">

//             <h2 className="text-[20px] font-semibold">
//               Extracted Metadata
//             </h2>

//             <span className="px-3 py-1 rounded-full bg-[#182241] text-[#A5B4FF] text-[12px]">
//               {uploadedDoc.metadata.confidence}
//             </span>
//           </div>

//           {/* Title */}

//           <div className="mt-6">

//             <p className="text-gray-400 text-[12px]">
//               Title
//             </p>

//             <h3 className="text-[16px] font-medium mt-2">
//               {uploadedDoc.metadata.title}
//             </h3>
//           </div>

//           {/* Summary */}

//           <div className="mt-6">

//             <p className="text-gray-400 text-[12px]">
//               Summary
//             </p>

//             <p className="text-gray-300 text-[13px] leading-7 mt-2">
//               {uploadedDoc.metadata.summary}
//             </p>
//           </div>

//           {/* Routed */}

//           <div className="mt-6">

//             <p className="text-gray-400 text-[12px]">
//               Routed To
//             </p>

//             <div className="mt-2 inline-flex px-3 py-1 rounded-full bg-[#182241] text-[12px] text-[#A5B4FF]">
//               {uploadedDoc.metadata.routedTo}
//             </div>
//           </div>

//           {/* Keywords */}

//           <div className="mt-6">

//             <p className="text-gray-400 text-[12px]">
//               Keywords
//             </p>

//             <div className="flex flex-wrap gap-2 mt-3">

//               {uploadedDoc.metadata.keywords.map(
//                 (keyword, index) => (
//                   <div
//                     key={index}
//                     className="px-3 py-1 rounded-full bg-[#111827] border border-[#1B2237] text-[12px] text-gray-300"
//                   >
//                     {keyword}
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UploadPage;
import { useState } from "react";

import { UploadCloud } from "lucide-react";

import API from "../services/api";

function UploadPage() {

  const [selectedFile, setSelectedFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [uploadedDoc, setUploadedDoc] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {

    if (!selectedFile) {
      return alert("Please select a PDF file");
    }

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("file", selectedFile);

      const response = await API.post(
        "/documents/upload",
        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      setUploadedDoc(response.data.document);

      alert("Document analyzed successfully");

      setSelectedFile(null);

    } catch (error) {

      console.log(error);

      alert("Upload failed");

    } finally {

      setLoading(false);
    }
  };

  return (
    <div>

      {/* Heading */}

      <h1 className="text-[26px] font-semibold tracking-tight">
        Upload document
      </h1>

      <p className="text-gray-400 text-[13px] mt-1">
        Drag a PDF or DOCX file. We'll extract metadata and route it within your domain.
      </p>

      {/* Upload Box */}

      <label className="mt-7 border-2 border-dashed border-[#1B2237] rounded-[28px] h-[280px] bg-[#0B1220] flex flex-col items-center justify-center cursor-pointer hover:border-[#6C7BFF]/40 transition">

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          hidden
          onChange={handleFileChange}
        />

        <div className="w-14 h-14 rounded-3xl bg-[#182241] flex items-center justify-center">
          <UploadCloud
            size={24}
            className="text-[#6C7BFF]"
          />
        </div>

        <h2 className="text-[18px] font-semibold mt-5">
          Drop your file here, or click to browse
        </h2>

        <p className="text-gray-500 text-[13px] mt-2">
          PDF or DOCX • up to 20MB
        </p>

        {selectedFile && (
          <div className="mt-5 px-4 py-2 rounded-2xl bg-[#111827] border border-[#1B2237] text-[13px] text-gray-300">
            {selectedFile.name}
          </div>
        )}
      </label>

      {/* Button */}

      <div className="flex justify-end mt-5">

        <button
          onClick={handleUpload}
          disabled={loading}
          className={`
            px-5 py-2.5 rounded-2xl text-[13px] font-medium transition
            ${
              loading
                ? "bg-[#2B3247] text-gray-400 cursor-not-allowed"
                : "bg-[#6C7BFF] hover:bg-[#5B6AF0] text-white"
            }
          `}
        >
          {loading
            ? "Analyzing..."
            : "Analyze document"}
        </button>
      </div>

      {/* Metadata Card */}

      {uploadedDoc && (
        <div className="bg-[#0B1220] border border-[#1B2237] rounded-[28px] p-7 mt-7">

          <div className="flex items-center justify-between">

            <h2 className="text-[20px] font-semibold">
              Extracted Metadata
            </h2>

            <span className="px-3 py-1 rounded-full bg-[#182241] text-[#A5B4FF] text-[12px]">
              {uploadedDoc.metadata.confidence}
            </span>
          </div>

          {/* Title */}

          <div className="mt-6">

            <p className="text-gray-400 text-[12px]">
              Title
            </p>

            <h3 className="text-[16px] font-medium mt-2">
              {uploadedDoc.metadata.title}
            </h3>
          </div>

          {/* Summary */}

          <div className="mt-6">

            <p className="text-gray-400 text-[12px]">
              Summary
            </p>

            <p className="text-gray-300 text-[13px] leading-7 mt-2">
              {uploadedDoc.metadata.summary}
            </p>
          </div>

          {/* Document Type */}

          <div className="mt-6">

            <p className="text-gray-400 text-[12px]">
              Document Type
            </p>

            <div className="mt-2 inline-flex px-3 py-1 rounded-full bg-[#182241] text-[12px] text-[#A5B4FF]">
              {uploadedDoc.metadata.documentType}
            </div>
          </div>

          {/* Routed To */}

          <div className="mt-6">

            <p className="text-gray-400 text-[12px]">
              Routed To
            </p>

            <div className="mt-2 inline-flex px-3 py-1 rounded-full bg-[#1E3A2F] text-[12px] text-[#6EE7B7] border border-[#2F5E4E]">
              {uploadedDoc.metadata.department}
            </div>
          </div>

          {/* Routing Reason */}

          <div className="mt-6">

            <p className="text-gray-400 text-[12px]">
              AI Routing Reason
            </p>

            <p className="text-[#6C7BFF] text-[13px] leading-6 mt-2">
              {uploadedDoc.metadata.routingReason}
            </p>
          </div>

          {/* Keywords */}

          <div className="mt-6">

            <p className="text-gray-400 text-[12px]">
              Keywords
            </p>

            <div className="flex flex-wrap gap-2 mt-3">

              {uploadedDoc.metadata.keywords.map(
                (keyword, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 rounded-full bg-[#111827] border border-[#1B2237] text-[12px] text-gray-300"
                  >
                    {keyword}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadPage;