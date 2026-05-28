import Button from "./button"

export default function ButtonPage({ nowPage, setNowPage, namePage, imageButton }) {
    return (
        <Button
            className={
                nowPage === namePage
                    && "bg-blue-200 hover:bg-blue-200"
            }
            handleClick={() => setNowPage(namePage)}
        >
            <span className="absolute left-3 w-6 h-6 flex items-center justify-center">
                <img
                    src={imageButton}
                    alt={namePage}
                    className="w-full h-full object-contain"
                />
            </span>

            <span className="text-center">
                {namePage}
            </span>
        </Button>
    )
}