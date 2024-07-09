import React, { useContext , useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import UserDelete from "./models/UserDelete";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
//import DataContext from "../DataContext";
import { useSelector,useDispatch } from 'react-redux';
import { updateUser,updateSNo,createUser,deleteUser,changeUpdate } from "../redux/slice/UserSlice";




const UserTable = () => {

  const navigate = useNavigate();
  // const { setData, setSNo, update, setUpdate } = useContext(DataContext);
  const data = useSelector((state)=> state.users.details);
  const dispatch = useDispatch();

  
  return (
    <div className="flex justify-center mt-4">
      <div className="relative overflow-x-auto w-full p-20">
        <div className="w-full flex justify-end">
        <button
          className="rounded-md bg-blue-600 hover:bg-blue-400 text-white px-6 py-2 top-3 mb-3"
          onClick={() => navigate("/user-details")}
        >
          Add user
        </button>
        </div>
        <table className="w-full shadow-md shadow-gray-500 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs font-normal uppercase  bg-gray-900 text-white">
            <tr key="head-row">
              <th scope="col" className="px-6 py-3 text-center">
                S. No.
              </th>
              <th scope="col" className="px-6 text-center py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-center ">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-center ">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3 text-center ">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {!!data.length ? (
              data.map((element, index) => {
                return(
                <tr className=" bg-gray-300">
                  <th
                    scope="row"
                    className="px-6 py-4 text-center font-medium whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4 text-center">{element.name}</td>
                  <td className="px-6 text-center py-4">{element.email}</td>
                  <td className="px-6 text-center py-4">{element.phone}</td>
                  <td className="px-6 text-center py-4 flex justify-center gap-5">
                    <button
                     className="drop-shadow-lg hover:text-white rounded-lg py-2 px-5 bg-green-900 hover:shadow-md hover:shadow-green-300 text-white"
                      onClick={() => {
                       dispatch(changeUpdate(true));
                        dispatch(updateSNo(index));
                        navigate("/user-details");
                      }}
                    >
                      Update
                    </button>
                    <Popup
                      trigger={
                        <button 
                        className=" drop-shadow-lg 
                        text-white
                        hover:text-white rounded-lg py-2 px-5 hover:shadow-md bg-red-900  hover:shadow-red-300">
                          Delete User
                        </button>
                      }
                      modal
                    >
                      {(close) => (
                        <div className="p-8 justify-start align-top flex flex-col gap-3">
                          <UserDelete />
                          <div className="gap-3 flex flex-row justify-end align-bottom">
                            <button
                              className="hover:bg-green-600 drop-shadow-lg hover:text-white rounded-lg py-2 px-4 bg-green-400 hover:shadow-lg hover:shadow-green-200"
                              onClick={() => {
                                const delIndex =index;
                                const newData = [...data].filter((val,index)=>{
return index != delIndex;
                                })
                         dispatch(deleteUser(newData));
                                close();
                              }}
                            >
                              Confirm
                            </button>
                            <button
                              className="hover:bg-red-600 drop-shadow-lg hover:text-white rounded-lg py-2 px-4 bg-red-400 hover:shadow-lg hover:shadow-red-200"
                              onClick={close}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </td>
                </tr>
                )
              })
            ) : (
              <div className="flex justify-start"> No Result Found </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
