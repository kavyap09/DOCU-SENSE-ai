import { Search } from "lucide-react";

function Documents() {
  return (
    <div>
      
      <div className="flex items-start justify-between">
        
        <div>
          <h1 className="text-[28px] font-semibold tracking-tight">
            Documents
          </h1>

          <p className="text-gray-400 text-[14px] mt-1">
            All documents processed in your workspace.
          </p>
        </div>

        <div className="relative">
          
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            type="text"
            placeholder="Search documents..."
            className="w-[280px] bg-[#0B1220] border border-[#1B2237] rounded-2xl pl-11 pr-4 py-3 outline-none text-[13px]"
          />
        </div>
      </div>

      <div className="bg-[#0B1220] border border-[#1B2237] rounded-[28px] mt-7 overflow-hidden">
        
        <div className="grid grid-cols-6 px-7 py-4 border-b border-[#1B2237] text-gray-400 text-[11px] uppercase tracking-wide">
          
          <p>Title</p>
          <p>Type</p>
          <p>Route</p>
          <p>Confidence</p>
          <p>Status</p>
          <p>Date</p>
        </div>

        <div className="h-[200px] flex items-center justify-center text-gray-500 text-[14px]">
          No documents found.
        </div>
      </div>
    </div>
  );
}

export default Documents;