import Button from "./button";
import { useRef } from "react";

async function handleFile(event) {
    const file = event.target.files;
    console.log(file);
}

function handleUpload(inputRef) {
    inputRef.current.click();
    
}

export default function UploadButton() {
    const inputRef = useRef(null)
    return (
        <>
        <input type="file" ref={inputRef} className="hidden" onChange={handleFile} />
        <Button className={"w-[7%] bg-yellow-300 hover:bg-yellow-600 ml-auto mr-6"} handleClick={() => {handleUpload(inputRef)}}> Upload </Button>
        </>
    )
}