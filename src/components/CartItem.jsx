import { CiTrash } from "react-icons/ci"
import { Select } from "./Select"
import { SIZES, QTY } from "../constant"

export function CartItem({ item, onClickTrash }) {
    const { product, qty, size } = item

    return (
        <div className="hover:bg-[#DAFFA2] p-2 bg-gray-50 space-y-2 dark:bg-transparent dark:hover:bg-night-50">
            <div className="flex space-x-2">
                {/* Image */}
                <img src={product.src}
                    className="h-24"
                />
                {/* Title and description */}
                <div className="space-y-2">
                    <div className="font-bold dark:text-white">
                        {product.title}
                    </div>
                    <div className="text-sm text-gray-400">
                        {product.description}
                    </div>
                </div>
                {/* Price */}
                <div className="dark:text-white">
                    ${product.price}
                </div>
            </div>

            <div className="flex justify-between pl-32">
                <div className="flex space-x-6">
                    <div>
                        <div className="font-bold dark:text-white" >SIZE</div>
                        <Select defaultValue={size} options={SIZES} className={"w-16 p-1 pl-2"} value={size}/>
                    </div>
                    <div>
                        <div className="font-bold dark:text-white">QTY</div>
                        <Select defaultValue={qty} options={QTY} className={"w-16 p-1 pl-2"} value={qty}/>
                    </div>
                </div>
                
                <button 
                    className="cursor-pointer"
                    onClick={() => onClickTrash(product.id)}
                >
                    <CiTrash size={25} className="text-black dark:text-white" />
                </button>
            </div>
        </div>
        
    )
}