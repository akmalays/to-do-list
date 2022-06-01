import React, { useEffect, useState } from "react";
import { FaEdit, FaRegCheckCircle } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import DeleteButton from "../components/deleteButton";
import axios from "axios";

function AppContent() {
  const dummyData =
    "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list";

  const [isOpen, setIsOpen] = useState(true);
  const [dataFetch, setDataFetch] = useState();

  useEffect(() => {
    axios
      .get(dummyData)
      .then((response) => {
        setDataFetch(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                7{" "}
              </span>{" "}
            </p>
            <div className="flex flex-wrap gap-5">
              {dataFetch
                ? dataFetch.map((e, i) => (
                    <div
                      className="container bg-white w-[200px] h-[150px] rounded-lg drop-shadow-lg"
                      key={e.id}
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
                              size={18}
                              onClick={() => setIsOpen(true)}
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
          </div>
          <div className="mb-5">
            <p className="text-green-800 font-bold font-lg">
              {" "}
              Finished Task{" "}
              <span className="bg-orange-600 rounded-lg px-2 py-2 text-white font-bold text-sm">
                {" "}
                5{" "}
              </span>{" "}
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            <div className="container bg-white w-[200px] h-[150px] rounded-lg drop-shadow-lg">
              <div className="px-4 py-4">
                <div className="flex justify-between">
                  <p className="font-light text-xs text-orange-600">
                    {" "}
                    making coffee{" "}
                  </p>
                  <div className="text-orange-600 cursor-pointer">
                    <FaRegCheckCircle size={20} />
                  </div>
                </div>
                <p className="font-bold text-green-800 pt-2 pb-4 ">
                  {" "}
                  get a coffee with full milk
                </p>{" "}
              </div>
              <div className=" flex justify-between  px-4">
                <div className="">
                  <DeleteButton className="mb-2" />
                </div>
                <p className="font-base text-[10px] text-orange-600">
                  {" "}
                  date : 15 may 2022
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppContent;
