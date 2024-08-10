import { Offcanvas } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import CartItem from "./CartItem"
import { formatCurrency } from "../utilities/formatCurrency"
import storeItems from "../data/items.json"

type Props = {
    isOpen: boolean
}

export const ShoppingCart = ({ isOpen }: Props) => {

    const { closeCart, cartItems } = useShoppingCart()

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="flex flex-col gap-2">
                    {cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} {...cartItem} />
                    ))}
                </div>
                {cartItems.length>0 &&
                    <div className="flex justify-end font-extrabold mt-2">
                        Total:{" "} {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(item => item.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0))}
                    </div>
                }
            </Offcanvas.Body>
        </Offcanvas>
    )
}