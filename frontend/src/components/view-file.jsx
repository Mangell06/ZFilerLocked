export default function ViewFile({ selectedFile, setSelectedFile, indexFile }) {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                setSelectedFile(indexFile)
            }}
            className={`cursor-pointer rounded-md aspect-square
                ${selectedFile === indexFile
                    ? "bg-blue-200"
                    : "bg-gray-100 hover:bg-gray-300"}
            `}
        />
    )
}