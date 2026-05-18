import {
  LayoutDashboard,
  Upload,
  FileText,
  BarChart3,
  User,
  LogOut,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
} from "lucide-react";

import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function DashboardLayout() {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const domain = localStorage.getItem("domain") || "enterprise";
const navigate = useNavigate();
  const domainMap = {
    healthcare: {
      label: "Healthcare",
      icon: <HeartPulse size={14} />,
    },
    enterprise: {
      label: "Enterprise",
      icon: <Building2 size={14} />,
    },
    university: {
      label: "University",
      icon: <GraduationCap size={14} />,
    },
    banking: {
      label: "Banking",
      icon: <Landmark size={14} />,
    },
  };

  const currentDomain =
    domainMap[domain] || domainMap.enterprise;

  const menu = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={16} />,
      path: "/dashboard",
    },
    {
      name: "Upload",
      icon: <Upload size={16} />,
      path: "/dashboard/upload",
    },
    {
      name: "Documents",
      icon: <FileText size={16} />,
      path: "/dashboard/documents",
    },
    {
      name: "Analytics",
      icon: <BarChart3 size={16} />,
      path: "/dashboard/analytics",
    },
    {
      name: "Profile",
      icon: <User size={16} />,
      path: "/dashboard/profile",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white flex">
      
      {/* Sidebar */}
      <aside className="w-[245px] border-r border-[#111827] bg-[#050B18] flex flex-col justify-between">
        
        <div>
          
          {/* Logo */}
          <div className="px-6 py-6 flex items-center gap-3">
            
            <div className="w-9 h-9 rounded-2xl bg-[#111827] border border-[#1F2937] flex items-center justify-center text-[13px]">
              📄
            </div>

            <h1 className="text-[18px] font-semibold tracking-tight">
              DocuSense AI
            </h1>
          </div>

          {/* Menu */}
          <div className="px-3 mt-2 space-y-1">
            
            {menu.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-2xl transition text-[14px]
                  ${
                    isActive
                      ? "bg-[#1A2235] text-white"
                      : "text-gray-400 hover:bg-[#111827]"
                  }`
                }
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="p-4">
          
          <div className="bg-[#111827]/70 rounded-2xl p-3 flex items-center gap-3">
            
            <div className="w-9 h-9 rounded-full bg-[#3046B5] flex items-center justify-center text-[12px] font-semibold">
              {user?.name?.charAt(0) || "K"}
            </div>

            <div>
              <h3 className="text-[13px] font-semibold uppercase leading-none">
                {user?.name || "KAVYA"}
              </h3>

              <p className="text-gray-400 text-[12px] mt-1">
                {currentDomain.label}
              </p>
            </div>
          </div>

        <button
  onClick={() => {
    localStorage.removeItem("token");
    navigate("/");
  }}
  className="flex items-center gap-3 text-gray-400 hover:text-white mt-5 px-2 text-[13px]"
>
  <LogOut size={16} />
  Logout
</button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        
        {/* Topbar */}
        <div className="h-[78px] border-b border-[#111827] px-8 flex items-center justify-between">
          
          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-wide">
              Welcome back
            </p>

            <h2 className="text-[20px] font-semibold uppercase leading-none mt-1">
              {user?.name || "User"}
            </h2>
          </div>

          <div className="px-4 py-2 rounded-2xl bg-[#0B1220] border border-[#1F2937] text-[12px] flex items-center gap-2">
            {currentDomain.icon}
            {currentDomain.label}
          </div>
        </div>

        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;