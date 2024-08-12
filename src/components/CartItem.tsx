import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { IoIosClose } from "react-icons/io";
import { formatCurrency } from "../utilities/formatCurrency";

type Props = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: Props) => {

    const { removeFromCart } = useShoppingCart()
    
    const item = storeItems.find(item => item.id === id)
    if (item == null) {
        return null
    }

    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <img className="w-32 h-28 object-cover" src={item.imgUrl} alt="image" />
                <div className="flex flex-col gap-1">
                    <div className="font-bold">{item.name} {quantity > 1 && <span className="text-sm font-thin">x{quantity}</span>} </div>
                    <div>{formatCurrency(item.price)}</div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div>{formatCurrency((item.price) * quantity)}</div>
                <button onClick={()=>removeFromCart(id)} className="remove-button p-0.5"><IoIosClose /></button>
            </div>
        </div>
    )
}

export default CartItem