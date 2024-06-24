import { createContext, useState } from "react";
const NameContext=createContext()
const Context=(data)=>{
    console.log(data)
    
    
    const [Listofstudent,setlistofstudent]=useState([
        {

        id:1,
        nameofStudent:"Anandhi",
        favourite:false
    },
    {
        id:2,
        nameofStudent:"Aravinth",
        favourite:false
    },
    {
        id:3,
        nameofStudent:"Saranya",
        favourite:false
    },
    {
        id:4,
        nameofStudent:"Nithia",
        favourite:false
    },
    {
        id:5,
        nameofStudent:"Amutha",
        favourite:false
    },

])
    return(
        
            <NameContext.Provider value={{Listofstudent,setlistofstudent,}}>
                {data.children}
            </NameContext.Provider>

        
    )


}
export default Context
export {NameContext}

