import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || []

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial);

    const handleAgregar = (item, cantidad) => {

        const itemAgregado = { ...item, cantidad };
        const carritoActual = [...carrito];
        const prodEnCarrito = carritoActual.find((producto) => producto.id === itemAgregado.id);

        if (prodEnCarrito) {
            prodEnCarrito.cantidad = prodEnCarrito.cantidad + cantidad
        } else {
            carritoActual.push(itemAgregado)
        }

        setCarrito(carritoActual);
    };

    const cantEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }

    const handleVaciar = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return(
        <CartContext.Provider value={{carrito, handleAgregar, cantEnCarrito, precioTotal, handleVaciar}}>
            {children}
        </CartContext.Provider>
    )
}