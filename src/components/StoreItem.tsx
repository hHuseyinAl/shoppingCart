import { formatCurrency } from "../utilities/formatCurrency"
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}
const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {

    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()

    const quantity = getItemQuantity(id);
    // console.log(quantity)

    return (
        <>
            <div className="flex flex-col gap-5 border-solid border-2 p-2 rounded-md border-black">
                <div className="flex justify-center">
                    <img className="w-80 h-80 object-cover" src={imgUrl} alt="image" />
                </div>
                <div className="flex justify-between">
                    <h1><span className="font-bold">Name:</span> {name}</h1>
                    <h1><span className="font-bold">Price:</span> {formatCurrency(price)}</h1>
                </div>
                <div>
                    {quantity === 0 ? (
                        <button onClick={()=>increaseCartQuantity(id)} className="border-solid border-2 p-1 border-gray-500 rounded-md hover:border-blue-700 hover:text-blue-700 transition w-full">Add To Cart</button>
                    ) :
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row justify-center gap-10">
                                <button onClick={()=>increaseCartQuantity(id)} className="border-solid border-gray-500 border-2 rounded-md p-1 hover:border-black transition"><FiPlus /></button>
                                <h2><span>{quantity}</span> in Cart</h2>
                                <button onClick={()=>decreaseCartQuantity(id)} className="border-solid border-gray-500 border-2 rounded-md p-1 hover:border-black transition"><FiMinus /></button>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={()=>removeFromCart(id)} className="border-solid border-gray-500 border-2 rounded-md p-1 px-5 hover:border-red-700 hover:text-red-700 transition ">Remove</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default StoreItem