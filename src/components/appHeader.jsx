import React, { useState } from "react";
import TaskButton from "./taskButton";
import AddModal from "./addModal";
import { useSelector } from "react-redux";

function AppHeader() {
  const dataFetch = useSelector((data) => data.todoReducer.listTodo);

  const [statusAddModal, setStatusAddModal] = useState(false);
  return (
    <div>
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
            June, 01 2022
          </div>
        </div>
        <div className="flex justify-center gap-20 py-5">
          <div className="">
            <p className="text-xl text-green-900 capitalize font-bold tracking-wide">
              {" "}
              you've got{" "}
              <span className="text-orange-600"> {dataFetch.length} </span> task
              today!{" "}
            </p>
            <div className="flex justify-center">
              <TaskButton actionButton={() => setStatusAddModal(true)} />
            </div>
          </div>
        </div>
      </div>
      <AddModal
        isOpen={statusAddModal}
        closeModal={() => setStatusAddModal(false)}
      />
    </div>
  );
}

export default AppHeader;
