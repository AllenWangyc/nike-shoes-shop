import {IoIosArrowDown} from "react-icons/io"
import { twMerge } from "tw-merge"

export function Select({title=null, options, className, onChange, value}) {
    return (<div className="relative dark:text-black">
        <select 
            value={value || ""}
            className={twMerge(
                `w-24 appearance-none border border-gray-300 p-4 bg-white ${className}`
            )}
            onChange={(e) => onChange(e.target.value)}
        > 
            <option value="" disabled hidden>
                {title}
            </option>
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <div className="absolute flex-center inset-y-0 right-0 pointer-events-none">
            <IoIosArrowDown />
        </div>
    </div>)
} 