import React from "react";

function Spinner({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="flex items-center justify-center ">
        <div className="w-16 h-16 border-b-2 border-primary-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export default Spinner;
