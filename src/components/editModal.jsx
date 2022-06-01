import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import CancelButton from "./cancelButton";

function EditModal(props) {
  const { open, closeModal } = props;
  return (
    <div>
      <Transition appear show={open} as={Fragment}>
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
                    don't worry, edit your plan here!
                  </Dialog.Title>
                  <div className="mt-2 grid justify-start">
                    <label className="py-2 font-bold text-xs" htmlFor="title">
                      {" "}
                      title
                    </label>
                    <input
                      className="text-xs py-2 px-1 w-[400px] border-none  focus:outline-none"
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
                      className="text-xs py-2 px-1 w-[400px] focus:outline-none "
                      type="desc"
                      id="title"
                    />
                    <label
                      className="py-2 focus:outline-none text-xs font-bold"
                      htmlFor="title"
                    >
                      {" "}
                      status
                    </label>
                    <select
                      className="text-xs py-2 px-1 w-[400px] focus:outline-none "
                      id="status"
                    >
                      <option label="finish">Finished Task</option>
                      <option label="on progress">on Progress</option>
                    </select>
                  </div>

                  <div className="flex justify-end gap-3 mt-4">
                    <button
                      className="bg-orange-500 rounded-lg text-white font-bold text-[12px] py-2 px-2 cursor-pointer"
                      onClick={() => props.actionButton()}
                    >
                      {" "}
                      edit task{" "}
                    </button>
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

export default EditModal;
