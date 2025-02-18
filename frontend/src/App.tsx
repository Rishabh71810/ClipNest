import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { CreateContentModal } from "./components/CreateContentModal"
import { SideBar } from "./components/SideBar"
import { Plusicon } from "./icons/Plusicon"
import { Shareicon } from "./icons/Shareicon"
import { useState } from "react"

function App() {
const [modalOpen , setModalOpen] = useState(true);
  return <div>
    <SideBar/>
    <div className="p-4 ml-72">
      <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false);
      }}/>
      <div className="flex justify-end gap-4">
      <Button variant="primary" text = "Add Content" startIcon={<Plusicon/>}/>
      <Button variant="secondary" text = "Share" startIcon={<Shareicon/>}/> 
      </div>
      <div className="flex gap-4">
      <Card type="twitter" link="https://x.com/UTDTrey/status/1891561670390026649" title="First tweet"/>
      <Card type="youtube" link="https://www.youtube.com/watch?v=jPeFU1A3CGg" title="First video"/>
      </div>
    </div>
    </div>
  
}

export default App
