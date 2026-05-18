function Analytics() {
  return (
    <div>
      
      <h1 className="text-[28px] font-semibold tracking-tight">
        Analytics
      </h1>

      <p className="text-gray-400 text-[14px] mt-1">
        Document routing and classification trends across your workspace.
      </p>

      <div className="grid grid-cols-2 gap-5 mt-7">
        
        <div className="bg-[#0B1220] border border-[#1B2237] rounded-[28px] p-6 h-[180px]">
          
          <h2 className="text-[18px] font-semibold">
            By destination
          </h2>

          <p className="text-gray-500 text-[14px] mt-7">
            Not enough data yet.
          </p>
        </div>

        <div className="bg-[#0B1220] border border-[#1B2237] rounded-[28px] p-6 h-[180px]">
          
          <h2 className="text-[18px] font-semibold">
            By document type
          </h2>

          <p className="text-gray-500 text-[14px] mt-7">
            Not enough data yet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;