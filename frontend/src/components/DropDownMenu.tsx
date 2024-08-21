import React, { useState } from "react";

export default function DropDownMenu({ layout, children, component, positioning }: { layout?: string, children: React.ReactNode, component: React.ReactNode, positioning: string }) {
  const [state, setState] = useState(false);
  return <>
    <div className="relative cursor-pointer">
      <div onClick={() => { setState(!state) }} className={`p-1 flex justify-center items-center rounded-md ${!state ? "text-gray-500" : "bg-gray-300 text-white"}`}>
        {component}
      </div>
      <div className={`${layout ? layout : "grid grid-cols-3"} w-28 ${positioning} absolute ${!state ? "hidden" : "block"}  border border-gray-300 shadow-md shadow-gray-300 py-2 gap-2 rounded-md px-1 text-gray-400`}>
        {children}
      </div>
    </div>
  </>
}
