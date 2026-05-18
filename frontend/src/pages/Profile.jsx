import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Lock,
} from "lucide-react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const domain = localStorage.getItem("domain") || "enterprise";

  const domainMap = {
    healthcare: {
      label: "Healthcare",
      icon: <HeartPulse size={16} />,
    },
    enterprise: {
      label: "Enterprise",
      icon: <Building2 size={16} />,
    },
    university: {
      label: "University",
      icon: <GraduationCap size={16} />,
    },
    banking: {
      label: "Banking",
      icon: <Landmark size={16} />,
    },
  };

  const currentDomain =
    domainMap[domain] || domainMap.enterprise;

  return (
    <div>
      
      <h1 className="text-[28px] font-semibold tracking-tight">
        Profile
      </h1>

      <p className="text-gray-400 text-[14px] mt-1">
        Your account details.
      </p>

      <div className="bg-[#0B1220] border border-[#1B2237] rounded-[28px] p-7 mt-7 max-w-3xl">
        
        <div>
          <p className="text-gray-500 uppercase text-[11px]">
            Name
          </p>

          <h2 className="text-[18px] font-semibold mt-2 uppercase">
            {user?.name || "KAVYA"}
          </h2>
        </div>

        <div className="mt-7">
          <p className="text-gray-500 uppercase text-[11px]">
            Email
          </p>

          <h2 className="text-[15px] font-medium mt-2">
            {user?.email || "kavya@gmail.com"}
          </h2>
        </div>

        <div className="mt-7">
          <p className="text-gray-500 uppercase text-[11px]">
            Domain
          </p>

          <div className="mt-4 border border-[#1B2237] bg-[#0A101D] rounded-2xl px-5 py-4 flex items-center justify-between">
            
            <div className="flex items-center gap-3">
              
              <div className="text-[#6C7BFF]">
                {currentDomain.icon}
              </div>

              <h2 className="text-[15px] font-semibold">
                {currentDomain.label}
              </h2>
            </div>

            <div className="px-3 py-1.5 rounded-full bg-[#111827] text-[11px] text-gray-400 flex items-center gap-2">
              <Lock size={12} />
              Locked
            </div>
          </div>

          <p className="text-gray-500 text-[13px] mt-3">
            Your domain was set at signup and cannot be changed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;