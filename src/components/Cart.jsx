import { SHOE_LIST } from "../constant"
import { CartItem } from "./CartItem"

export function Cart({ cartItems }) {
    return (
        <div>
            <h2 className="mb-5 text-4xl font-bold dark:text-white">Cart</h2>
            <ul className="space-y-5">
                {cartItems.map(item => {
                    return (<li key={item.product.id}>
                        <CartItem item={item} />
                    </li>)
                })}
            </ul>
        </div>
    )
}