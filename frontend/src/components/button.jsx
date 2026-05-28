import { twMerge } from "tailwind-merge";

export default function Button({ children, handleClick, className }) {
    return (
        <button
            onClick={handleClick}
            className={twMerge(`
                bg-gray-100
                hover:bg-gray-300
                w-[85%]
                py-1
                rounded-xl
                text-sm
                relative
                flex
                items-center
                justify-center
                ${className}
            `)}
        >
            {children}
        </button>
    )
}