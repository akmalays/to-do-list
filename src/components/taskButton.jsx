import React from "react";

function TaskButton() {
  return (
    <div>
      <button className="bg-orange-500 rounded-lg text-white font-bold text-[12px] py-2 px-2 cursor-pointer">
        {" "}
        add task{" "}
      </button>
    </div>
  );
}

export default TaskButton;
