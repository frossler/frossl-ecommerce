import React from 'react'
import ItemCount from '../itemcount/ItemCount'
import { toast } from 'react-hot-toast'
import { useState, useEffect, cleanup } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({ desc, title, price, image }) => {
    const [itemsEstadoInterno, setItemsEstadoInterno] = useState(0);
    const onAdd = (contador, setContador) => {
        if (contador > 1) {
            toast.success(`Added ${contador} items to Cart`);
        } else {
            toast.success(`Added ${contador} item to Cart`);
        }
        setTimeout(() => {
            setContador(0);
            setItemsEstadoInterno(contador);
        }, 2800)
    }

    // re-renderizar al cambiar el estado interno cuando sucede el onAdd.
    useEffect(() => {
        console.log("State changed!")
        return {
            cleanup
        }
    }, [itemsEstadoInterno])
    if (itemsEstadoInterno !== 0) {
        return (
            <>
                <h1>{title}</h1>
                <div id="info">
                    <div id="left-side">
                        <img src={`${image}`} alt={`${title}`} />
                    </div>
                    <div id="right-side">
                        <h2>Price: ${`${price}`}</h2>
                        <h3>{desc}</h3>
                        <Link className='finalizar-compra-btn' to='/cart' >Finalizar compra</Link>
                    </div>
                </div>
            </>
        )
    }

    // renderizar al cargar el item detail
    if (image) {
        return (
            <>
                <h1>{title}</h1>
                <div id="info">
                    <div id="left-side">
                        <img src={`${image}`} alt={`${title}`} />
                    </div>
                    <div id="right-side">
                        <h2>Price: ${`${price}`}</h2>
                        <h3>{desc}</h3>
                        <ItemCount stock={5} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h1>LOADING PRODUCT DETAIL...</h1>
            </>
        )
    }
}

export default ItemDetail;