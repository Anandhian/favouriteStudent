import {BrowserRouter, Route, Routes} from "react-router-dom"

import List from "./components/liststudents"
import Fav from "./components/favlist"
import Context from "./components/contextprovider"




const App =()=>{

  return(
    <>
    <Context>
    
      <BrowserRouter>
    
      
      <Routes>
        
      <Route  path="/" element={<List/>}></Route>
      <Route path="/favlist" element={<Fav/>}></Route>
      

      
      </Routes>
      
      </BrowserRouter>
      </Context>
      
      
      
      
      
    
    
    
    </>
  )

}
export default App

