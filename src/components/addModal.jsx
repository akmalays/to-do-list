import React from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../store/actions/index";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import TaskButton from "./taskButton";
import CancelButton from "./cancelButton";

function AddModal(props) {
  const dispatch = useDispatch();
  const { isOpen, closeModal } = props;
  const actionAddTodo = () => {
    const newData = {
      id: 2,
      title: "Dinner with family",
      description: "lorem ipsum",
      status: 0,
      createdAt: "2019-11-16 18:00",
    };
    dispatch(allStore.addTodo(newData));
    closeModal();
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
