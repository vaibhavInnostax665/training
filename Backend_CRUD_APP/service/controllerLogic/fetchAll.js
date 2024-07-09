import data from "../db/db.js";

const fetchAll = ()=>{
return  {"data":data,"status":200,"message":"Providing all data"};
}

export default fetchAll;