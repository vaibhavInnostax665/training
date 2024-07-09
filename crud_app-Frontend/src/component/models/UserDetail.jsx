import React, { useContext, useEffect, useState } from "react";
// import DataContext from "../../DataContext";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import { updateUser,updateSNo,createUser,deleteUser,changeUpdate } from "../../redux/slice/UserSlice";

const UserDetail = () => {
 // const { data, setData, sNo, update, setUpdate } = useContext(DataContext);
  
 const data = useSelector((state)=> state.users.details);
 const update = useSelector((state)=> state.users.update);
 const sNo = useSelector((state)=> state.users.sNo);
 const dispatch = useDispatch();

 const input = document.querySelector("input");
  if (input) {
    input.addEventListener("keydown", function (event) {
      if (/\d/g.test(event.key)) event.preventDefault();
    });
  }

  const navigate = useNavigate();
  const details = {};
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [upDate, setUpDate] = useState(false);
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    if (update && data[sNo]) {
      setName(data[sNo].name);
      setEmail(data[sNo].email);
      setPhone(data[sNo].phone);
      dispatch(changeUpdate(false));
      setUpDate(true);
    }
  }, [data, update, sNo]);

  const patternForPhone = /^\d{10}$/;
  const patternForMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleSubmission = ()=>{
    console.log(typeof createUser);
    details.name = name;
    details.email = email;
    details.phone = phone;
    if (name && patternForPhone.test(phone)&&(patternForMail.test(email)) &&(!name.startsWith(' '))) {
      if (upDate) {
        dispatch(updateUser({sNo,details}));
      } else if (!upDate) {
        dispatch(createUser(details));
      }
      navigate("/");
    }
  }

  
  return (
    <div className="flex flex-col items-center m-10">
      
      <div className="p-5 container w-7/12 h-full flex-col flex items-center gap-10 border-2 full rounded-md shadow-blue-300 shadow-md">
      <h1 className="font-bold text-lg underline">User Details From</h1>
        <div className="flex w-6/12 flex-col gap-2">
          <div className="flex flex-nowrap gap-3">
            <label className="w-4/12 font-semibold">Name<span className="text-red-700 ">*</span> :</label>
            <div className="flex flex-col w-full gap-1">
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Enter name"
                className="border-b-2 border-b-blue-600 outline-none bg-gray-200 py-1 rounded-lg focus:border-b-green-300 text-center"
              />
              
              {(!name) && (submit || update) && (
                <div className="text-red-600 text-sm font-extralight">name required*</div>
              )}
              {(name.startsWith(' '))&&(submit || update)&&(<div className="text-red-600 text-sm font-extralight">name cannot start with whitespace*</div>)}
      
            </div>
          </div>
        </div>
        <div className="flex w-6/12 flex-col gap-2">
          <div className="flex flex-nowrap gap-3">
            <label className="w-4/12 font-semibold">Email<span className="text-red-700 ">*</span> :</label>
            <div className="flex flex-col w-full gap-1">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className="border-b-2 border-b-blue-600 outline-none bg-gray-200 py-1 rounded-lg focus:border-b-green-300 text-center"
              />
              {!email && submit && (
                <div className="text-red-600 text-sm font-extralight">email required*</div>
              ) }
              {email && submit && !patternForMail.test(email) && (
                <div className="text-red-600 text-sm font-extralight">incorrect email format</div>
              )}
            </div>
          </div>
        </div>
        <div className="flex w-6/12 flex-col gap-2">
          <div className="flex flex-nowrap gap-3">
            <label className="w-4/12 font-semibold">Phone<span className="text-red-700 ">*</span> :</label>
            <div className="flex flex-col w-full gap-1">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                placeholder="Phone number"
               className="border-b-2 border-b-blue-600 outline-none bg-gray-200 py-1 rounded-lg focus:border-b-green-300 w-full text-center"
              />
              {!phone && submit && (
                <div className="text-red-600 text-sm font-extralight">phone number required*</div>
              )}
              {phone &&!(phone.length == 10) &&  submit && !patternForPhone.test(phone) && (
                <div className="text-red-600 text-sm font-extralight">phone number length should be 10</div>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-row justify-end">
          <button
            className="hover:bg-green-700 drop-shadow-lg hover:text-white rounded-lg py-1 px-5 bg-green-600 hover:shadow-lg hover:shadow-green-200 text-white h-9 text-center"
            onClick={()=>{
              handleSubmission();
              setSubmit(true);
            }}
          >
            {upDate ? "Update" : "Submit"}
          </button>
          <button
            className="hover:bg-red-800 hover:text-white rounded-lg py-1 px-5 h-9 text-center bg-red-700 hover:shadow-red-200 hover:shadow-lg text-white"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
