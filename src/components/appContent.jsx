import React from "react";
import { FaEdit } from "react-icons/fa";

function AppContent() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid">
          <div className="mb-10">
            <p className="text-green-800 font-bold font-lg py-2">
              {" "}
              On Progress{" "}
              <span className="bg-orange-600 rounded-lg px-2 py-2 text-white font-bold text-sm">
                {" "}
                7{" "}
              </span>{" "}
            </p>
            <div className="flex flex-wrap gap-5">
              <div className="container bg-white w-[200px] h-[150px] rounded-lg drop-shadow-lg">
                <div className="px-4 py-4">
                  <div className="flex justify-between">
                    <p className="font-light text-xs text-orange-600">
                      {" "}
                      making coffee{" "}
                    </p>
                    <div className="text-orange-600 cursor-pointer">
                      <FaEdit size={20} />
                    </div>
                  </div>
                  <p className="font-bold text-green-800 pt-2 pb-4 ">
                    {" "}
                    get a coffee with full milk
                  </p>{" "}
                </div>
                <div className=" flex justify-end px-4">
                  <p className="font-light text-xs text-orange-600">
                    {" "}
                    till : 15 may 2022
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className=""></div>
          <p className="text-green-800 font-bold font-lg">
            {" "}
            Finished Task{" "}
            <span className="bg-orange-600 rounded-lg px-2 py-2 text-white font-bold text-sm">
              {" "}
              5{" "}
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AppContent;
