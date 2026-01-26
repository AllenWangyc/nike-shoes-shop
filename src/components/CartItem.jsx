export function CartItem({ item }) {
    return (
        <div className="flex hover:bg-[#DAFFA2] cursor-pointer p-2 bg-gray-50 space-x-2">
            <img src={item.src}
                className="h-24"
            />
            <div className="space-y-2">
                <div className="font-bold">
                    {item.title}
                </div>
                <div className="text-sm text-gray-400">
                    {item.description}
                </div>
            </div>
            
            <div>
                ${item.price}
            </div>
        </div>
    )
}