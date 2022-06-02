import React from "react";

function okButton(props) {
  const { actionButton } = props;
  return (
    <div>
      <div>
        {" "}
        <button
          className="bg-orange-600 rounded-lg text-white font-bold text-[12px] py-2 px-2"
          onClick={() => actionButton()}
        >
          {" "}
          Okay{" "}
        </button>
      </div>
    </div>
  );
}

export default okButton;
