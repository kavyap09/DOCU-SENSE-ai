// import { useEffect, useState } from "react";

// import {
//   ArrowRight,
//   FileText,
//   Sparkles,
//   Files,
//   Upload,
// } from "lucide-react";

// import API from "../services/api";

// function Dashboard() {

//   const [documents, setDocuments] = useState([]);

//   /* Upload PDF */

//   const handleFileUpload = async (file) => {
//     try {
//       const token = localStorage.getItem("token");

//       const formData = new FormData();

//       formData.append("file", file);

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

//       alert("Document uploaded successfully");

//       fetchDocuments();

//     } catch (error) {
//       console.log(error);

//       alert("Upload failed");
//     }
//   };

//   /* Fetch Documents */

//   const fetchDocuments = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await API.get(
//         "/documents",
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );

//       setDocuments(response.data);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchDocuments();
//   }, []);

//   return (
//     <div>

//       {/* Heading */}

//       <h1 className="text-[26px] font-semibold tracking-tight">
//         Dashboard
//       </h1>

//       <p className="text-gray-400 text-[13px] mt-1">
//         Your workspace at a glance.
//       </p>

//       {/* Stats */}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-7">

//         {[
//           {
//             title: "Total documents",
//             value: documents.length,
//             icon: <Files size={16} />,
//           },
//           {
//             title: "Processed",
//             value: documents.length,
//             icon: <FileText size={16} />,
//           },
//           {
//             title: "Active routes",
//             value: "4",
//             icon: <Sparkles size={16} />,
//           },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="bg-[#0B1220] border border-[#1B2237] rounded-[24px] p-5"
//           >

//             <div className="flex items-start justify-between">

//               <div>
//                 <p className="text-gray-400 text-[12px]">
//                   {item.title}
//                 </p>

//                 <h2 className="text-[30px] font-semibold mt-2">
//                   {item.value}
//                 </h2>
//               </div>

//               <div className="text-gray-400">
//                 {item.icon}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Upload Section */}

//       <div className="bg-[#0B1220] border border-[#1B2237] rounded-[28px] p-7 mt-7">

//         <div className="flex items-start justify-between gap-6 flex-wrap">

//           <div>

//             <h2 className="text-[20px] font-semibold">
//               Start a new analysis
//             </h2>

//             <p className="text-gray-400 text-[13px] mt-2 leading-6 max-w-xl">
//               Upload a PDF file and DocuSense AI will extract metadata,
//               generate summaries and intelligently route the document.
//             </p>
//           </div>

//           <label className="bg-[#6C7BFF] hover:bg-[#5B6AF0] transition px-5 py-3 rounded-2xl text-[13px] font-medium cursor-pointer flex items-center gap-2">

//             <Upload size={16} />

//             Upload PDF

//             <input
//               type="file"
//               accept=".pdf"
//               hidden
//               onChange={(e) =>
//                 handleFileUpload(
//                   e.target.files[0]
//                 )
//               }
//             />
//           </label>
//         </div>
//       </div>

//       {/* Recent Documents */}

//       <div className="bg-[#0B1220] border border-[#1B2237] rounded-[28px] mt-7 overflow-hidden">

//         <div className="flex items-center justify-between px-7 py-5 border-b border-[#1B2237]">

//           <h2 className="text-[17px] font-semibold">
//             Recent documents
//           </h2>

//           <button className="flex items-center gap-2 text-[13px] text-gray-300 hover:text-white transition">
//             View all
//             <ArrowRight size={14} />
//           </button>
//         </div>

//         {/* Empty State */}

//         {documents.length === 0 ? (
//           <div className="h-[220px] flex items-center justify-center text-gray-500 text-[13px]">
//             No documents uploaded yet.
//           </div>
//         ) : (
//           <div className="p-6 space-y-4">

//             {documents.map((doc) => (
//               <div
//                 key={doc._id}
//                 className="bg-[#111827] border border-[#1B2237] rounded-2xl p-5"
//               >

//                 <div className="flex items-start justify-between gap-5">

//                   <div>

//                     <h3 className="text-[15px] font-semibold">
//                       {doc.metadata.title}
//                     </h3>

//                     <p className="text-gray-400 text-[13px] leading-6 mt-2 max-w-2xl">
//                       {doc.metadata.summary}
//                     </p>

//                     <div className="flex items-center gap-3 mt-4 flex-wrap">

//                       <span className="px-3 py-1 rounded-full bg-[#1B2237] text-[11px] text-gray-300">
//                         {doc.metadata.routedTo}
//                       </span>

//                       <span className="px-3 py-1 rounded-full bg-[#1B2237] text-[11px] text-gray-300">
//                         {doc.metadata.confidence}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="text-gray-500 text-[12px] whitespace-nowrap">
//                     {new Date(
//                       doc.createdAt
//                     ).toLocaleDateString()}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import { useEffect, useState } from "react";

import {
  ArrowRight,
  FileText,
  Sparkles,
  Files,
  Upload,
} from "lucide-react";

import API from "../services/api";

function Dashboard() {

  const [documents, setDocuments] = useState([]);

  /* Upload PDF */

  const handleFileUpload = async (file) => {
    try {

      const token = localStorage.getItem("token");

      const formData = new FormData();

      formData.append("file", file);

      await API.post(
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

      alert("Document uploaded successfully");

      fetchDocuments();

    } catch (error) {

      console.log(error);

      alert("Upload failed");
    }
  };

  /* Fetch Documents */

  const fetchDocuments = async () => {
    try {

      const token = localStorage.getItem("token");

      const response = await API.get(
        "/documents",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setDocuments(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <div>

      {/* Heading */}

      <h1 className="text-[26px] font-semibold tracking-tight">
        Dashboard
      </h1>

      <p className="text-gray-400 text-[13px] mt-1">
        Your workspace at a glance.
      </p>

      {/* Stats */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-7">

        {[
          {
            title: "Total documents",
            value: documents.length,
            icon: <Files size={16} />,
          },
          {
            title: "Processed",
            value: documents.length,
            icon: <FileText size={16} />,
          },
          {
            title: "Active routes",
            value: "4",
            icon: <Sparkles size={16} />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#0B1220] border border-[#1B2237] rounded-[24px] p-5"
          >

            <div className="flex items-start justify-between">

              <div>

                <p className="text-gray-400 text-[12px]">
                  {item.title}
                </p>

                <h2 className="text-[30px] font-semibold mt-2">
                  {item.value}
                </h2>
              </div>

              <div className="text-gray-400">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Section */}

      <div className="bg-[#0B1220] border border-[#1B2237] rounded-[28px] p-7 mt-7">

        <div className="flex items-start justify-between gap-6 flex-wrap">

          <div>

            <h2 className="text-[20px] font-semibold">
              Start a new analysis
            </h2>

            <p className="text-gray-400 text-[13px] mt-2 leading-6 max-w-xl">
              Upload a PDF file and DocuSense AI will extract metadata,
              generate summaries and intelligently route the document.
            </p>
          </div>

          <label className="bg-[#6C7BFF] hover:bg-[#5B6AF0] transition px-5 py-3 rounded-2xl text-[13px] font-medium cursor-pointer flex items-center gap-2">

            <Upload size={16} />

            Upload PDF

            <input
              type="file"
              accept=".pdf"
              hidden
              onChange={(e) =>
                handleFileUpload(
                  e.target.files[0]
                )
              }
            />
          </label>
        </div>
      </div>

      {/* Recent Documents */}

      <div className="bg-[#0B1220] border border-[#1B2237] rounded-[28px] mt-7 overflow-hidden">

        <div className="flex items-center justify-between px-7 py-5 border-b border-[#1B2237]">

          <h2 className="text-[17px] font-semibold">
            Recent documents
          </h2>

          <button className="flex items-center gap-2 text-[13px] text-gray-300 hover:text-white transition">
            View all
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Empty State */}

        {documents.length === 0 ? (
          <div className="h-[220px] flex items-center justify-center text-gray-500 text-[13px]">
            No documents uploaded yet.
          </div>
        ) : (
          <div className="p-6 space-y-4">

            {documents.map((doc) => (
              <div
                key={doc._id}
                className="bg-[#111827] border border-[#1B2237] rounded-2xl p-5"
              >

                <div className="flex items-start justify-between gap-5">

                  <div>

                    <h3 className="text-[15px] font-semibold">
                      {doc.metadata.title}
                    </h3>

                    <p className="text-gray-400 text-[13px] leading-6 mt-2 max-w-2xl">
                      {doc.metadata.summary}
                    </p>

                    <p className="text-[#6C7BFF] text-[12px] mt-3">
                      {doc.metadata.routingReason}
                    </p>

                    <div className="flex items-center gap-3 mt-4 flex-wrap">

                      <span className="px-3 py-1 rounded-full bg-[#182241] text-[11px] text-[#A5B4FF]">
                        {doc.metadata.documentType}
                      </span>

                      <span className="px-3 py-1 rounded-full bg-[#1E3A2F] text-[11px] text-[#6EE7B7] border border-[#2F5E4E]">
                        {doc.metadata.department}
                      </span>

                      <span className="px-3 py-1 rounded-full bg-[#1B2237] text-[11px] text-gray-300">
                        {doc.metadata.confidence}
                      </span>
                    </div>
                  </div>

                  <div className="text-gray-500 text-[12px] whitespace-nowrap">
                    {new Date(
                      doc.createdAt
                    ).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;