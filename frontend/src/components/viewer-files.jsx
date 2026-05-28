import { useState } from "react"
import ViewFile from "./view-file";
import StorageTools from "./storage-tools";

export default function ViewerFiles() {
    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <>
        <StorageTools />
        <div onClick={() => {setSelectedFile(null)}} className="grid grid-cols-12 gap-4 p-4 w-full h-5/6">
            <ViewFile 
                selectedFile={selectedFile} 
                setSelectedFile={setSelectedFile} 
                indexFile={0}
            />
        </div>
        </>
    )
}