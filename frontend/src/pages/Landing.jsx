// import { ArrowRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// function Landing() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden">

//       {/* Glow */}
//       <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#4F6BFF] opacity-20 blur-[180px] rounded-full"></div>

//       {/* Navbar */}
//       <nav className="relative z-10 flex items-center justify-between px-8 md:px-14 py-7">

//         <div className="flex items-center gap-3">
//           <div className="w-11 h-11 rounded-2xl bg-[#111827] border border-[#1F2937] flex items-center justify-center">
//             <span className="text-lg">📄</span>
//           </div>

//           <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
//             DocuSense AI
//           </h1>
//         </div>

//         <div className="flex items-center gap-4">

//           <button
//             onClick={() => navigate("/auth")}
//             className="text-sm text-gray-300 hover:text-white transition"
//           >
//             Sign in
//           </button>

//           <button
//             onClick={() => navigate("/auth")}
//             className="bg-[#6C7BFF] hover:bg-[#5B6AF0] transition px-5 py-2.5 rounded-2xl flex items-center gap-2 text-sm font-medium shadow-lg shadow-[#6C7BFF]/20"
//           >
//             Get started
//             <ArrowRight size={16} />
//           </button>
//         </div>
//       </nav>

//       {/* Hero */}
//       <section className="relative z-10 flex flex-col items-center text-center px-6 pt-14">

//         <div className="px-4 py-2 rounded-full border border-[#1F2937] bg-[#0B1220] text-gray-300 text-xs tracking-wide">
//           ✨ AI-powered document intelligence
//         </div>

//         <h1 className="max-w-4xl mt-7 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
//           Extract, classify and
//           <br />
//           route every document
//           <br />
//           automatically.
//         </h1>

//         <p className="max-w-2xl mt-7 text-gray-400 text-base md:text-lg leading-8">
//           DocuSense AI reads PDFs and DOCX files,
//           extracts metadata, and routes documents
//           securely to the correct department.
//         </p>

//         <div className="flex items-center gap-4 mt-10">

//           <button
//             onClick={() => navigate("/auth")}
//             className="bg-[#6C7BFF] hover:bg-[#5B6AF0] transition px-6 py-3 rounded-2xl flex items-center gap-2 text-sm font-medium shadow-lg shadow-[#6C7BFF]/20"
//           >
//             Start free
//             <ArrowRight size={16} />
//           </button>

//           <button className="border border-[#1F2937] hover:border-[#6C7BFF] transition px-6 py-3 rounded-2xl text-sm text-gray-300 hover:text-white">
//             Explore domains
//           </button>
//         </div>
//       </section>

//       {/* Domains */}
//       <section className="relative z-10 px-8 md:px-14 mt-28">

//         <div className="text-center">
//           <h2 className="text-2xl md:text-3xl font-semibold">
//             Built for four domains
//           </h2>

//           <p className="text-gray-400 mt-4 text-sm md:text-base">
//             Strict domain isolation means your data never crosses boundaries.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">

//           {[
//             {
//               icon: "❤️",
//               title: "Hospitals / Healthcare",
//               desc: "Manage prescriptions, insurance claims, lab reports, and patient records.",
//             },
//             {
//               icon: "🏢",
//               title: "Companies / Enterprises",
//               desc: "Process resumes, invoices, contracts, and employee forms.",
//             },
//             {
//               icon: "🎓",
//               title: "Colleges / Universities",
//               desc: "Handle applications, certificates, scholarships, and placements.",
//             },
//             {
//               icon: "🏦",
//               title: "Banking & Finance",
//               desc: "Manage KYC documents, loans, and transaction disputes.",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#0B1220] border border-[#1B2237] rounded-3xl p-6 hover:border-[#6C7BFF] transition duration-300"
//             >

//               <div className="w-12 h-12 rounded-2xl bg-[#111827] flex items-center justify-center text-xl">
//                 {item.icon}
//               </div>

//               <h3 className="text-lg font-semibold mt-5 leading-7">
//                 {item.title}
//               </h3>

//               <p className="text-gray-400 mt-4 leading-7 text-sm">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Features */}
//       <section className="relative z-10 px-8 md:px-14 mt-24 pb-24">

//         <div className="grid md:grid-cols-3 gap-6">

//           {[
//             {
//               icon: "🔄",
//               title: "Smart routing",
//               desc: "Documents are classified and routed automatically.",
//             },
//             {
//               icon: "🛡️",
//               title: "Strict isolation",
//               desc: "One user, one domain. No cross-domain access.",
//             },
//             {
//               icon: "✨",
//               title: "Rich metadata",
//               desc: "Extract titles, keywords, summaries and confidence scores.",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#0B1220] border border-[#1B2237] rounded-3xl p-6"
//             >

//               <div className="text-2xl">
//                 {item.icon}
//               </div>

//               <h3 className="text-lg font-semibold mt-5">
//                 {item.title}
//               </h3>

//               <p className="text-gray-400 mt-4 leading-7 text-sm">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//    <footer className="relative z-10 border-t border-[#111827]">

//   <div className="max-w-7xl mx-auto px-6 md:px-14 py-6">

//     <div className="flex flex-col md:flex-row items-center justify-between gap-4">

//       <div className="flex items-center gap-3">


//         <h2 className="text-[15px] font-semibold tracking-tight">
//           DocuSense AI
//         </h2>
//       </div>

//       <p className="text-gray-500 text-[12px]">
//         © 2026 DocuSense AI. All rights reserved.
//       </p>

//       <div className="flex items-center gap-5 text-gray-500 text-[12px]">

//         <p className="hover:text-white transition cursor-pointer">
//           Privacy Policy
//         </p>

//         <p className="hover:text-white transition cursor-pointer">
//           Terms of Service
//         </p>
//       </div>

//     </div>
//   </div>
// </footer>
//     </div>
//   );
// }

// export default Landing;
import {
  ArrowRight,
  GitBranch,
  ShieldCheck,
  Sparkles,
  HeartPulse,
  Building2,
  GraduationCap,
  Landmark,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#4F6BFF] opacity-20 blur-[180px] rounded-full"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-14 py-7">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-2xl bg-[#111827] border border-[#1F2937] flex items-center justify-center">
            <span className="text-lg">📄</span>
          </div>

          <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
            DocuSense AI
          </h1>
        </div>

        <div className="flex items-center gap-4">

          <button
            onClick={() => navigate("/auth")}
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Sign in
          </button>

          <button
            onClick={() => navigate("/auth")}
            className="bg-[#6C7BFF] hover:bg-[#5B6AF0] transition px-5 py-2.5 rounded-2xl flex items-center gap-2 text-sm font-medium shadow-lg shadow-[#6C7BFF]/20"
          >
            Get started
            <ArrowRight size={16} />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-14">

        <div className="px-4 py-2 rounded-full border border-[#1F2937] bg-[#0B1220] text-gray-300 text-xs tracking-wide">
          ✨ AI-powered document intelligence
        </div>

        <h1 className="max-w-4xl mt-7 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
          Extract, classify and
          <br />
          route every document
          <br />
          automatically.
        </h1>

        <p className="max-w-2xl mt-7 text-gray-400 text-base md:text-lg leading-8">
          DocuSense AI reads PDFs and DOCX files,
          extracts metadata, and routes documents
          securely to the correct department.
        </p>

        <div className="flex items-center gap-4 mt-10">

          <button
            onClick={() => navigate("/auth")}
            className="bg-[#6C7BFF] hover:bg-[#5B6AF0] transition px-6 py-3 rounded-2xl flex items-center gap-2 text-sm font-medium shadow-lg shadow-[#6C7BFF]/20"
          >
            Start free
            <ArrowRight size={16} />
          </button>

          <button className="border border-[#1F2937] hover:border-[#6C7BFF] transition px-6 py-3 rounded-2xl text-sm text-gray-300 hover:text-white">
            Explore domains
          </button>
        </div>
      </section>

      {/* Domains */}
      <section className="relative z-10 px-8 md:px-14 mt-28">

        <div className="text-center">

          <h2 className="text-2xl md:text-3xl font-semibold">
            Built for four domains
          </h2>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Strict domain isolation means your data never crosses boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">

          {[
            {
              icon: HeartPulse,
              title: "Hospitals / Healthcare",
              desc: "Manage prescriptions, insurance claims, lab reports, and patient records.",
            },
            {
              icon: Building2,
              title: "Companies / Enterprises",
              desc: "Process resumes, invoices, contracts, and employee forms.",
            },
            {
              icon: GraduationCap,
              title: "Colleges / Universities",
              desc: "Handle applications, certificates, scholarships, and placements.",
            },
            {
              icon: Landmark,
              title: "Banking & Finance",
              desc: "Manage KYC documents, loans, and transaction disputes.",
            },
          ].map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-[#0B1220]
                  border border-[#1B2237]
                  rounded-[32px]
                  p-7
                  hover:border-[#6C7BFF]/60
                  hover:translate-y-[-4px]
                  transition-all duration-300
                  min-h-[280px]
                  flex flex-col
                "
              >

                <div className="
                  w-14 h-14
                  rounded-2xl
                  bg-[#111827]
                  border border-[#1F2937]
                  flex items-center justify-center
                ">
                  <Icon
                    size={28}
                    className="text-[#8EA2FF]"
                  />
                </div>

                <h3 className="text-lg font-semibold mt-6 leading-7">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7 text-sm">
                  {item.desc}
                </p>

              </div>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-8 md:px-14 mt-28 pb-24">

        <div className="text-center">

          <h2 className="text-2xl md:text-3xl font-semibold">
            Powerful AI capabilities
          </h2>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Built to automate document workflows securely and intelligently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-14">

          {[
            {
              icon: GitBranch,
              title: "Smart routing",
              desc: "Documents are automatically classified and routed to the correct department.",
            },
            {
              icon: ShieldCheck,
              title: "Strict isolation",
              desc: "Every account stays locked to a single domain with protected access control.",
            },
            {
              icon: Sparkles,
              title: "Rich metadata",
              desc: "Extract titles, summaries, keywords and confidence scores instantly.",
            },
          ].map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  bg-[#0B1220]
                  border border-[#1B2237]
                  rounded-[32px]
                  p-8
                  min-h-[240px]
                  flex flex-col
                  justify-between
                  hover:border-[#6C7BFF]/60
                  hover:translate-y-[-4px]
                  transition-all duration-300
                "
              >

                <div>

                  <div className="
                    w-14 h-14
                    rounded-2xl
                    bg-[#111827]
                    border border-[#1F2937]
                    flex items-center justify-center
                  ">
                    <Icon
                      size={26}
                      className="text-[#8EA2FF]"
                    />
                  </div>

                  <h3 className="text-[20px] font-semibold mt-6">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-7 text-[14px]">
                    {item.desc}
                  </p>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#111827]">

        <div className="max-w-7xl mx-auto px-6 md:px-14 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              <h2 className="text-[15px] font-semibold tracking-tight">
                DocuSense AI
              </h2>
            </div>

            <p className="text-gray-500 text-[12px]">
              © 2026 DocuSense AI. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-gray-500 text-[12px]">

              <p className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Terms of Service
              </p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;