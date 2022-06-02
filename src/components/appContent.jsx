import React, { useEffect, useState } from "react";
import { FaEdit, FaRegCheckCircle } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import EditModal from "./editModal";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../store/actions/index";
import DeleteModal from "./confirmationModal";
import DoneUndoneModal from "./confirmationModal";
import TaskButton from "./taskButton";
import AddModal from "./addModal";
import { Toaster, toast } from "react-hot-toast";

function AppContent(props) {
  const dispatch = useDispatch();

  // set up data for list todo
  const dataFetch = useSelector((data) => data.todoReducer.listTodo);
  const dataUndone = dataFetch.filter((data) => data.status === 0);
  const dataDone = dataFetch.filter((data) => data.status === 1);

  if (dataUndone.length > 1) {
    dataUndone.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }
  if (dataDone.length > 1) {
    dataDone.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  // state
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [statusAddModal, setStatusAddModal] = useState(false);
  const [idTodoSelected, setIdTodoSelected] = useState("");
  const [openModalDoneUndone, setOpenModalDoneUndone] = useState(false);
  const [todoSelected, setTodoSelected] = useState({});

  // get initial list todo
  useEffect(() => {
    dispatch(allStore.getDefaultListToDo());
  }, [dispatch]);

  // function to delete todo
  const openDeleteConfirmation = (id) => {
    setIdTodoSelected(id);
    setOpenModalDelete(true);
  };

  const deleteTodo = () => {
    dispatch(allStore.deleteTodo(idTodoSelected));
    setOpenModalDelete(false);
    toast.success("success delete your plan!");
  };

  // function to change status done todo
  const openModalChangeStatus = (id) => {
    setIdTodoSelected(id);
    setOpenModalDoneUndone(true);
  };

  const updateStatusTodo = (status) => {
    dispatch(allStore.changeStatusTodo(idTodoSelected, status));
    setOpenModalDoneUndone(false);
    toast.success("success done your plan!");
  };

  // function to update todo
  const openEditConfirmation = (item) => {
    setTodoSelected(item);
    setOpenModalEdit(true);
  };

  return (
    <div>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="flex justify-center gap-20 py-5">
        <div className="">
          <p className="text-xl text-green-900 capitalize font-bold tracking-wide">
            {" "}
            you've got{" "}
            <span className="text-orange-600"> {dataFetch.length} </span> task
            today!{" "}
          </p>
          <div className="flex justify-center">
            <TaskButton actionButton={() => setStatusAddModal(true)} />
          </div>
        </div>
      </div>
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
                            <FaEdit
                              size={18}
                              onClick={() => openEditConfirmation(e)}
                            />
                            <AiTwotoneDelete
                              onClick={() => openDeleteConfirmation(e.id)}
                            />
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
                          onClick={() => openModalChangeStatus(e.id)}
                        >
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
                          <FaEdit
                            size={18}
                            onClick={() => openEditConfirmation(e)}
                          />
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
                        onClick={() => openDeleteConfirmation(e.id)}
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
        <AddModal
          isOpen={statusAddModal}
          closeModal={() => setStatusAddModal(false)}
        />
        <EditModal
          open={openModalEdit}
          closeModal={() => setOpenModalEdit(false)}
          todoSelected={todoSelected}
        />
        <DeleteModal
          open={openModalDelete}
          closeModal={() => setOpenModalDelete(false)}
          actionButton={() => deleteTodo()}
          title="Delete List Confirmation"
          description="Are You Sure to Delete This List ?"
        />
        <DoneUndoneModal
          open={openModalDoneUndone}
          closeModal={() => setOpenModalDoneUndone(false)}
          actionButton={() => updateStatusTodo(1)}
          title="Change Status Confirmation"
          description="Are You Sure Finisihed The Task ?"
        />
      </div>
    </div>
  );
}

export default AppContent;
