import { Link } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <div className="bg-white shadow-md py-3 px-5 flex text-lg justify-between items-center sticky top-0 z-10">
            <nav className="flex gap-10 py-2">
                <Link to="/" className="navlinks">Home</Link>
                <Link to="/store" className="navlinks">Store</Link>
            </nav>
            {cartQuantity > 0 &&
                <button onClick={openCart} className="border-2 p-2 border-gray-500 rounded-full relative hover:border-gray-950 transition"><IoCartOutline className="size-6" />
                    <div className="absolute rounded-full bg-blue-500 w-7 top-7 left-5 text-white">
                        {cartQuantity}
                    </div>
                </button>
            }
        </div>
    )
}

export default Navbar