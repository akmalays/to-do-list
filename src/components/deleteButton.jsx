import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

function TaskButton() {
  return (
    <div>
      <button className="bg-green-800 rounded-lg text-white font-bold text-[12px] py-1 px-2 cursor-pointer">
        delete
      </button>
    </div>
  );
}

export default TaskButton;
