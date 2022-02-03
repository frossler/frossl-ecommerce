import { useState } from "react"
import { useContexto } from '../../context/cartContext'


const ItemCount = ({ stock, initial, onAdd, this_product}) => {

  let [counter, setCounter] = useState(initial)
  const { addItem } = useContexto()

  function substractCounter() {
      if (counter > 1) {
          setCounter(counter - 1)
      }
  }
  function addCounter() {
      if (counter < stock) {
          setCounter(counter + 1)
      }
  }

  const addToCartHandler = () => {
    onAdd(counter, setCounter)
    addItem(this_product, counter)
}


  return (
      <>
          <div className="stock-setter-cnt">
              <button onClick={substractCounter}>-</button>
              <p className="counter">{counter}</p>
              <button onClick={addCounter} >+</button>
          </div>
          <button className="add-to-cart-btn" onClick={addToCartHandler}>Add to Cart</button>
      </>
  )
}

export default ItemCount
