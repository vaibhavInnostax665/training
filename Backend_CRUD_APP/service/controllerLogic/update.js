import data from "../db/db.js";


const update = (Id,details)=>{
    const User = data.find((val)=>{
        return parseInt(val.id )=== Id;
     });
     if(!User && Id){
        return {"data":null,"message":"Invalid Id","status":404};
    }

    const {id,name} = details;
 
    if(!User && name && id){
       
        const newUser = details;
        data.push(newUser);
        
        return {"data":data,"message":"New User created", "status":200};}

        if(!User && (!id || !name)){
            return{"data":null,"message":"Provide all details", "status":400};
        };

        data.forEach((user,index)=>{
            if(parseInt(user.id) === Id){
             
                if(id){user.id = id;}
                if(name){user.name = name;}
            }
        })
      return  {"data":data,"message":"Updated successfully", "status":200};

    }

export default update;