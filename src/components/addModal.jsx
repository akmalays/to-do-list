import React, { Fragment, useState } from "react";
import uuid from "react-uuid";
import { useDispatch } from "react-redux";
import allStore from "../store/actions/index";
import { Dialog, Transition } from "@headlessui/react";
import TaskButton from "./taskButton";
import CancelButton from "./cancelButton";

function AddModal(props) {
  const dispatch = useDispatch();
  const { isOpen, closeModal } = props;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const actionAddTodo = () => {
    if (title === "") {
      alert("isi judul dahulu !");
    } else if (desc === "") {
      alert("isi descripsi juga ya !");
    } else {
      const newData = {
        id: uuid(),
        title: title,
        description: desc,
        status: 0,
        createdAt: getCurrentDate(),
      };
      dispatch(allStore.addTodo(newData));
      closeModal();
    }
  };

  const getCurrentDate = () => {
    const nowDate = new Date();
    const convertDate = nowDate.toISOString();
    const dateNow = convertDate.split("T")[0];
    const timeNow = convertDate.split("T")[1].split(".")[0];
    const joinDate = dateNow + " " + timeNow;
    return joinDate;
  };

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#f3f3f3] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg flex justify-center font-bold leading-6 text-gray-900"
                  >
                    what's the plan for today?
                  </Dialog.Title>
                  <div className="mt-2 grid justify-start">
                    <label className="py-2 font-bold text-xs" htmlFor="title">
                      {" "}
                      title
                    </label>
                    <input
                      className="text-xs py-2 px-1 w-[400px] border-none focus:outline-none"
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label
                      className="py-2 focus:outline-none text-xs font-bold"
                      htmlFor="title"
                    >
                      {" "}
                      desc
                    </label>
                    <input
                      className="text-xs py-2 px-1 w-[400px]  border-none focus:outline-none "
                      type="textarea"
                      id="desc"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>

                  <div className="flex justify-end gap-3 mt-4">
                    <TaskButton actionButton={() => actionAddTodo()} />
                    <div onClick={closeModal}>
                      <CancelButton />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default AddModal;
