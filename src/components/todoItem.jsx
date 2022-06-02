import React from "react";
import { FaEdit, FaRegCheckCircle } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

function TodoItem(props) {
  const {
    listItem,
    openEditConfirmation,
    openDeleteConfirmation,
    openModalChangeStatus,
    isDoneItem,
  } = props;
  return (
    <div className="container bg-white w-[200px] min-h-[150px] h-auto rounded-lg drop-shadow-lg">
      <div className="px-4 py-3">
        <div className="flex justify-between">
          <p className="font-light text-xs text-orange-600">{listItem.title}</p>
          <div className="text-orange-600 flex gap-2 cursor-pointer">
            <FaEdit size={18} onClick={() => openEditConfirmation(listItem)} />
            {isDoneItem ? (
              <FaRegCheckCircle size={18} />
            ) : (
              <AiTwotoneDelete
                onClick={() => openDeleteConfirmation(listItem.id)}
              />
            )}
          </div>
        </div>
        <p className="font-bold text-green-800 pt-2 pb-4 ">
          {listItem.description}
        </p>
      </div>
      <div className=" flex justify-between px-4 pb-5">
        {isDoneItem ? (
          <button
            className="bg-green-800 py-1 px-1.5 text-white font-semibold text-[10px] rounded-lg"
            onClick={() => openDeleteConfirmation(listItem.id)}
          >
            Delete
          </button>
        ) : (
          <button
            className="bg-green-800 py-1 px-1.5 text-white font-semibold text-[10px] rounded-lg"
            onClick={() => openModalChangeStatus(listItem.id)}
          >
            Done !
          </button>
        )}
        <p className="font-base text-[10px] text-orange-600">
          {listItem.createdAt}
        </p>
      </div>
    </div>
  );
}

export default TodoItem;
