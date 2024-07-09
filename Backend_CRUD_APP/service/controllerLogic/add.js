import data from "../db/db.js";

const add = (details)=>{
data.push(details);
return {"data":data,"status":200,"message":"User added to database!!"} ;
}
export default add;