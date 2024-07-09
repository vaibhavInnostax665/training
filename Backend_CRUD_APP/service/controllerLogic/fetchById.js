import data from "../db/db.js";


const fetchById  = (Id)=>{

        const User = data.find((val)=>{
          
           return parseInt(val.id ) === Id;
        });
        
    return (!User ? {"data":null,"status":404,"message":"User not found!!"}:{"data":User,"status":200,"message":"User found!!"})  ;
}

export default fetchById;