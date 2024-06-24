
import { useContext } from "react"
import { NameContext } from "./contextprovider"
import { Link } from "react-router-dom"
const Fav=()=>{
    const {Listofstudent,setlistofstudent}= useContext(NameContext)
    const handledelete=(removeid)=>{
        removeid.favourite=false
        setlistofstudent([...Listofstudent])
    }


    
    return(
        <>


        <div className="bg-red-600 flex py-5 px-5 gap-10 justify-center">
        <h1 className="text-white  text-2xl cursor-pointer border-b-2 border-[#DC2626] hover:border-white">
                <Link to={"/"}>List of student</Link>
            </h1>
            <h1 className="text-white  text-2xl cursor-pointer border-b-2 border-white" >FAvorite Student</h1>
            

        </div>
        <ul>
            {
                Listofstudent.map((item,index)=>{
                    return(
                        <div>
                            {
                                item.favourite?<li className=" flex justify-around mt-4 py-4" key={index}>
                                    <p className="text-2xl font-bold ">{index+1}.{item.nameofStudent}</p>
                                    <button className="border bg-red-700 rounded text-white p-1 mr-3 " onClick={()=>{handledelete(item)}}>Remove</button>
                                     
                                     
                                </li>:""
                                
                            }
                        </div>

                    )
                })
            }

           
                    
                
                

               
            
        </ul>

    







</>

    )

    
}
export default Fav