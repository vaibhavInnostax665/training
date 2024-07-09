import data from "../db/db.js";

const deletion = (Id)=>{
    const User = data.find((val)=>{
        return val.id === Id;
    })
    if(!User){
        return {"data":null,"status":404,"message":"User not found!!"} ;
    }
    const newData = data.filter((val)=>{
       return parseInt(val.id ) !== Id;
    });
   return  {"data":newData,"status":200,"message":"User Deleted"} ;
}

export default deletion;