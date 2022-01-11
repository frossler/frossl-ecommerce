import ItemList from "../itemlist/ItemList.js";
import { StyledListContainer } from './ItemListContainerStyled'
// Products Array -temp-
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ user, greeting }) => {
  // Fetch API
  const [list, setList] = useState([]);
  const { id } = useParams();
  console.log(id)
  
  useEffect(() => {
      if (id !== undefined) {
          const loadProducts = async () => {
              console.log("Fetch by Id")
              try {
                  const resp = await fetch(`https://fakestoreapi.com/products/category/${id}?limit=6`);
                  const info = await resp.json();
                  return info;
              } catch (error) {
                  console.log(error);
              }
          }
          const productos = loadProducts();
          productos.then(response => {
              console.log(response);
              setList(response);
          })
          
      } else {
          const loadProducts = async () => {
              try {
                  const resp = await fetch('https://fakestoreapi.com/products?limit=12');
                  const info = await resp.json();
                  return info;
              } catch (error) {
                  console.log(error);
              }
          }
          const productos = loadProducts();
          productos.then(response => {
              console.log(response);
              setList(response);
          })
      }
  }, [id]) 


  return (

    <StyledListContainer>
        {list.length < 1 ? (
            <>
                <h1>Welcome, {user}!</h1>
                <h1>{greeting}</h1>
                <h1 style={{marginTop: 60}}>Loading Products...</h1>
            </>
        ) : (
            <>
                <h1>Welcome, {user}!</h1>
                <h1>{greeting}</h1>
                <ItemList items={list} />
            </>
        )
        }

    </StyledListContainer>
  )
}

//   if (list.length < 1) {
//       return (
//           <>
//               <h1>Welcome, {user}!</h1>
//               <h1>{greeting}</h1>
//               <h1 style={{marginTop: 60}}>Loading Products...</h1>
//           </>
//       )
//   } else {
//       return (
//           <StyledListContainer>
//               <h1>Welcome, {user}!</h1>
//               <h1>{greeting}</h1>
//               <ItemList items={list} />
//           </StyledListContainer>
//       )
//   }
// };

export default ItemListContainer