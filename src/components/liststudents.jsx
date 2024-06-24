import { useContext } from "react"
import { NameContext } from "./contextprovider"
import { Link } from "react-router-dom"


const List=()=>{
    const {Listofstudent,setlistofstudent}= useContext(NameContext)
    
    const handlechnage=(removeid)=>{
        removeid.favourite=true
        setlistofstudent([...Listofstudent])

    }
    return(

    
        <>
        <div className="bg-red-600 flex py-5 px-5 gap-10 justify-center">
            <h1 className="text-white  text-2xl cursor-pointer border-b-2 border-white" >List of Students</h1>
            <h1 className="text-white  text-2xl cursor-pointer border-b-2 border-[#DC2626] hover:border-white">
                <Link to={"/favlist"}>Favorite student</Link>
            </h1>

        </div>
        <ul>
            {
                Listofstudent.map((item,index)=>{
                    return(
                        
                        item.favourite?<li key={ index} className="flex justify-around mt-4 py-4">
                            <p className=" text-2xl">{index+1}.{item.nameofStudent}</p>
                            <button className="bg-black py-1 px-4 rounded-md mr-5 text-red-500  " onClick={()=>{handlechnage(item)}}>Add your fav student</button>
                            </li>:<li key={index} className="flex justify-around mt-5 py-4">
                            <p className="text-2xl">{index+1}.{item.nameofStudent}</p>
                            <button className="bg-black text-white py-1 px-4 rounded-md mr-5" onClick={()=>{handlechnage(item)}}>Add</button>

                        </li>
       
                    )
                }
            )
            }
        </ul>
        




        </>
    
        )
}
export default List