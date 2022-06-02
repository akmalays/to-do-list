import React from "react";

function AppHeader() {
  const date = new Date();
  const stringDate = date.toUTCString();
  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-5 my-2">
        <div className="flex justify-start gap-10">
          <div className="bg-blue-800 rounded-full h-10 w-10 "></div>{" "}
          <div className="grid">
            {" "}
            <p className="text-green-700 text-xs font-light">
              {" "}
              Good Morning
            </p>{" "}
            <p className="text-green-900 text-lg font-bold"> Jaden Smith</p>
          </div>
        </div>
        <div className="font-semibold text-green-900 text-sm">
          {" "}
          {stringDate}
          {/* June, 01 2022 */}
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
