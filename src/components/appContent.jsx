import React, { useEffect, useState } from "react";
import { FaEdit, FaRegCheckCircle } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import EditModal from "./editModal";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../store/actions/index";
import ConfirmationModal from "./confirmationModal";

function AppContent(props) {
  const dispatch = useDispatch();
  const dataFetch = useSelector((data) => data.todoReducer.listTodo);

  const dataUndone = dataFetch.filter((data) => data.status === 0);
  const dataDone = dataFetch.filter((data) => data.status === 1);

  if (dataUndone.length > 1) {
    dataUndone.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }
  if (dataDone.length > 1) {
    dataDone.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  const [isOpen, setIsOpen] = useState(false);
  const [openModalConfirm, setOpenModalConfirm] = useState(false);

  useEffect(() => {
    dispatch(allStore.getDefaultListToDo());
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-start">
        <div className="grid">
          <div className="mb-10">
            <p className="text-green-800 font-bold font-lg py-4">
              {" "}
              On Progress{" "}
              <span className="bg-orange-600 rounded-lg px-2 py-2 text-white font-bold text-sm">
                {" "}
                {dataUndone.length}{" "}
              </span>{" "}
            </p>
            <div className="flex flex-wrap gap-5">
              {dataUndone
                ? dataUndone.map((e, i) => (
                    <div
                      className="container bg-white w-[200px] h-[150px] rounded-lg drop-shadow-lg"
                      key={i}
                    >
                      <div className="px-4 py-3">
                        <div className="flex justify-between">
                          <p className="font-light text-xs text-orange-600">
                            {" "}
                            {e.description}{" "}
                          </p>
                          <div className="text-orange-600 flex gap-2 cursor-pointer">
                            <FaEdit size={18} onClick={() => setIsOpen(true)} />
                            <AiTwotoneDelete
                              onClick={() => setOpenModalConfirm(true)}
                            />
                          </div>
                        </div>
                        <p className="font-bold text-green-800 pt-2 pb-4 ">
                          {" "}
                          {e.title}
                        </p>{" "}
                      </div>
                      <div className=" flex justify-between px-4">
                        <button className="bg-green-800 py-1 px-1.5 text-white font-semibold text-[10px] rounded-lg">
                          {" "}
                          Done !
                        </button>
                        <p className="font-base text-[10px] text-orange-600">
                          {" "}
                          {e.createdAt}
                        </p>{" "}
                      </div>
                    </div>
                  ))
                : null}
            </div>
            <EditModal open={isOpen} closeModal={() => setIsOpen(false)} />
          </div>
          <div className="mb-5">
            <p className="text-green-800 font-bold font-lg">
              {" "}
              Finished Task{" "}
              <span className="bg-orange-600 rounded-lg px-2 py-2 text-white font-bold text-sm">
                {" "}
                {dataDone.length}{" "}
              </span>{" "}
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            {dataDone
              ? dataDone.map((e, i) => (
                  <div
                    className="container bg-white w-[200px] h-[150px] rounded-lg drop-shadow-lg"
                    key={i}
                  >
                    <div className="px-4 py-3">
                      <div className="flex justify-between">
                        <p className="font-light text-xs text-orange-600">
                          {" "}
                          {e.description}{" "}
                        </p>
                        <div className="text-orange-600 flex gap-2 cursor-pointer">
                          <FaEdit size={18} onClick={() => setIsOpen(true)} />
                          <FaRegCheckCircle size={18} />
                        </div>
                      </div>
                      <p className="font-bold text-green-800 pt-2 pb-4 ">
                        {" "}
                        {e.title}
                      </p>{" "}
                    </div>
                    <div className=" flex justify-between px-4">
                      <button
                        className="bg-green-800 py-1 px-1.5 text-white font-semibold text-[10px] rounded-lg"
                        onClick={() => setOpenModalConfirm(true)}
                      >
                        {" "}
                        Delete
                      </button>
                      <p className="font-base text-[10px] text-orange-600">
                        {" "}
                        {e.createdAt}
                      </p>{" "}
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
        <ConfirmationModal
          open={openModalConfirm}
          closeModal={() => setOpenModalConfirm(false)}
        />
      </div>
    </div>
  );
}

export default AppContent;
