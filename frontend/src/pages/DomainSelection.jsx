import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import API from "../services/api";
function DomainSelection() {
  const navigate = useNavigate();

  const [selectedDomain, setSelectedDomain] = useState("");

  const domains = [
    {
      id: "healthcare",
      icon: "🏥",
      title: "Hospitals / Healthcare",
      desc: "Manage prescriptions, insurance claims, lab reports, and patient records.",
      tags: ["Patient Record", "Insurance Claim", "Prescription"],
      gradient:
        "from-pink-900/40 via-[#1B1120] to-[#0B1220]",
    },
    {
      id: "enterprise",
      icon: "🏢",
      title: "Companies / Enterprises",
      desc: "Process resumes, invoices, contracts, and employee forms.",
      tags: ["Resume", "Invoice", "Contract"],
      gradient:
        "from-blue-900/40 via-[#10182E] to-[#0B1220]",
    },
    {
      id: "university",
      icon: "🎓",
      title: "Colleges / Universities",
      desc: "Handle student applications, certificates, scholarships, and placement resumes.",
      tags: ["Student Application", "Fee Receipt", "Hall Ticket"],
      gradient:
        "from-emerald-900/40 via-[#0F211D] to-[#0B1220]",
    },
    {
      id: "banking",
      icon: "🏦",
      title: "Banking & Finance",
      desc: "Manage loan applications, KYC documents, and transaction disputes.",
      tags: ["Loan Application", "KYC Document", "Credit Form"],
      gradient:
        "from-yellow-900/40 via-[#24190D] to-[#0B1220]",
    },
  ];

const handleContinue = async () => {
  try {
    const token = localStorage.getItem("token");

    await API.post(
      "/domain/select",
      {
        domain: selectedDomain,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    navigate("/dashboard");
  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message
    );
  }
};

  return (
    <div className="min-h-screen bg-[#030712] text-white px-6 md:px-14 py-10">
      
      {/* Top Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#4F6BFF] opacity-10 blur-[180px] rounded-full"></div>

      {/* Logo */}
      <div className="relative z-10 flex items-center gap-3">
        
        <div className="w-10 h-10 rounded-2xl bg-[#111827] border border-[#1F2937] flex items-center justify-center">
          <span className="text-sm">📄</span>
        </div>

        <h1 className="text-xl font-semibold tracking-tight">
          DocuSense AI
        </h1>
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mt-16">
        
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Choose your domain
        </h1>

        <p className="text-gray-400 text-sm leading-7 mt-4 max-w-2xl mx-auto">
          This decision is{" "}
          <span className="font-semibold text-white">
            permanent.
          </span>{" "}
          Your account will be tied to this domain and you won't be able to
          change it later.
        </p>
      </div>

      {/* Domain Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 mt-14 max-w-5xl mx-auto">
        
        {domains.map((domain) => (
          <div
            key={domain.id}
            onClick={() => setSelectedDomain(domain.id)}
            className={`
              relative cursor-pointer rounded-[28px] border transition-all duration-300
              bg-gradient-to-br ${domain.gradient}
              p-7 min-h-[210px]
              ${
                selectedDomain === domain.id
                  ? "border-[#6C7BFF] ring-1 ring-[#6C7BFF]/40"
                  : "border-[#1B2237] hover:border-[#6C7BFF]/50"
              }
            `}
          >
            
            {/* Tick Mark */}
            {selectedDomain === domain.id && (
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#6C7BFF] flex items-center justify-center shadow-lg shadow-[#6C7BFF]/30">
                <Check size={16} />
              </div>
            )}

            {/* Icon */}
            <div className="w-12 h-12 rounded-2xl bg-[#0F172A]/90 flex items-center justify-center text-xl">
              {domain.icon}
            </div>

            {/* Title */}
            <h2 className="text-[24px] font-semibold mt-5 tracking-tight">
              {domain.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-7 mt-4">
              {domain.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mt-5">
              
              {domain.tags.map((tag, index) => (
                <div
                  key={index}
                  className="px-3 py-1.5 rounded-full bg-black/25 border border-white/5 text-xs text-gray-300"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="relative z-10 flex justify-center mt-12 pb-8">
        
        <button
          onClick={handleContinue}
          disabled={!selectedDomain}
          className={`
            px-8 py-3 rounded-2xl text-sm font-medium transition-all duration-300
            ${
              selectedDomain
                ? "bg-[#6C7BFF] hover:bg-[#5B6AF0] text-white shadow-lg shadow-[#6C7BFF]/20"
                : "bg-[#232A3D] text-gray-400 cursor-not-allowed"
            }
          `}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default DomainSelection;