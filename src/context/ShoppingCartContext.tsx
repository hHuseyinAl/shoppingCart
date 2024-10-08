import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/UseLocalStorage";


const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart=()=>{
    return useContext(ShoppingCartContext)
}

type Props ={
    children:ReactNode
}

type CartItem ={
    id:number
    quantity:number
}

type ShoppingCartContext ={
    openCart:()=>void
    closeCart:()=>void
    getItemQuantity:(id:number)=>number
    increaseCartQuantity:(id:number)=>void
    decreaseCartQuantity:(id:number)=>void
    removeFromCart:(id:number)=>void
    cartQuantity:number
    cartItems:CartItem[]
}

export const ShoppingCartProvider=({children}:Props)=>{
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart")
    const [isOpen, setIsOpen] =useState(false)

    const cartQuantity=cartItems.reduce((quantity, item)=>item.quantity + quantity, 0)

    const openCart=()=>setIsOpen(true)
    const closeCart=()=>setIsOpen(false)

    const getItemQuantity =(id:number)=>{
        return cartItems.find(item=>item.id===id)?.quantity || 0
    }

    const increaseCartQuantity =(id:number)=>{
        setCartItems(currentItems=>{
            if (currentItems.find(item=>item.id===id)==null) {
                return [...currentItems, {id, quantity:1}]
            }else{
                return currentItems.map(item=>{
                    if (item.id===id) {
                        return {...item, quantity:item.quantity + 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    const decreaseCartQuantity =(id:number)=>{
        setCartItems(currentItems=>{
            if (currentItems.find(item=>item.id===id)?.quantity === 1) {
                return currentItems.filter(item=>item.id !== id)
            }else{
                return currentItems.map(item=>{
                    if (item.id===id) {
                        return {...item, quantity:item.quantity - 1}
                    }else{
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart =(id:number)=>{
        setCartItems(currentItems=>{
            return currentItems.filter(item=>item.id !== id)
        })
    }

    return <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, openCart, closeCart, cartItems, cartQuantity}}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
}