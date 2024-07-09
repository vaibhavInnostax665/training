import data from "../db/db.js";


const partialUpdate = (Id , details)=>{
    const User = data.findIndex((val)=>{
        return parseInt(val.id )=== Id;
     });
     if(!User){return {"data":null,"status":404,"message":"User not found!!"} ;};
    
     const {id,name} = details;
     data.forEach((user,index)=>{
        if(user.id === Id){
            if(id){user.id = id;}
            if(name){user.name = name;}
        }
    })
    return {"data":data,"status":200,"message":"User updated Successfully"} ;
}

export default partialUpdate;