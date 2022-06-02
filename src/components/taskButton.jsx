import React from "react";

function TaskButton(props) {
  return (
    <div>
      <button
        className="bg-orange-500 rounded-lg text-white font-bold text-[12px] py-2 px-2 cursor-pointer"
        onClick={() => props.actionButton()}
      >
        {" "}
        add task{" "}
      </button>
    </div>
  );
}

export default TaskButton;
