import { useState } from "react"
import ButtonPage from "./components/button-page";
import StorageImg from "./assets/storage.png"
import ViewerFiles from "./components/viewer-files";

function App() {
  const [nowPage, setNowPage] = useState("Storage");
  return (
    <div className="flex">
      <nav className='bg-gray-100 flex flex-col items-center w-[10%] h-screen gap-2 py-6 '>
          <ButtonPage 
            imageButton={StorageImg} 
            nowPage={nowPage} 
            setNowPage={setNowPage} 
            namePage={"Storage"}
          />
          <ButtonPage 
            imageButton={StorageImg} 
            nowPage={nowPage} 
            setNowPage={setNowPage} 
            namePage={"Prueba"}
          />
      </nav>
      <div className="bg-white w-[90%] h-screen">
        {nowPage === "Storage" && <ViewerFiles />}
      </div>
    </div>
  )
}

export default App
