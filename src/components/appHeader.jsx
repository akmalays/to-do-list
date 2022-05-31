import React from "react";
import TaskButton from "./button";

function AppHeader() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center gap-5 my-5">
          <div className="bg-blue-800 rounded-full h-10 w-10 "></div>{" "}
          <div className="flex justify-center gap-20">
            <div className="grid">
              {" "}
              <p className="text-green-700 text-xs font-light">
                {" "}
                Good Morning
              </p>{" "}
              <p className="text-green-900 text-lg font-bold"> Jaden Smith</p>
            </div>
            <div>
              <TaskButton />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-20 py-5">
          <p className="text-xl text-green-900 capitalize font-bold tracking-wide">
            {" "}
            you've got <span className="text-orange-600"> 12 </span> task today!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
