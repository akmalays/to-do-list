import React, { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import CancelButton from "./cancelButton";
import allStore from "../store/actions/index";

function EditModal(props) {
  const dispatch = useDispatch();
  const { open, closeModal, todoSelected } = props;
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState(0);

  // set initial selected todo
  useEffect(() => {
    const todoObj = todoSelected;
    if (todoObj) {
      setId(todoObj.id);
      setTitle(todoObj.title);
      setDesc(todoObj.description);
      setStatus(todoObj.status);
    }
  }, [todoSelected]);

  const actionEditTodo = () => {
    if (title === "") {
      alert("isi judul dahulu !");
    } else if (desc === "") {
      alert("isi descripsi juga ya !");
    } else {
      const newData = {
        id: id,
        title: title,
        description: desc,
        status: status,
        createdAt: getCurrentDate(),
      };
      dispatch(allStore.updateTodo(id, newData));
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
                      className="text-xs py-2 px-1 w-[400px] focus:outline-none "
                      type="desc"
                      id="title"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
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
                      onChange={(e) => setStatus(e.target.value)}
                      value={status}
                    >
                      <option label="on progress" value={0}>
                        on Progress
                      </option>
                      <option label="finish" value={1}>
                        Finished Task
                      </option>
                    </select>
                  </div>
                  <div className="flex justify-end gap-3 mt-4">
                    <button
                      className="bg-orange-500 rounded-lg text-white font-bold text-[12px] py-2 px-2 cursor-pointer"
                      onClick={() => actionEditTodo()}
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
