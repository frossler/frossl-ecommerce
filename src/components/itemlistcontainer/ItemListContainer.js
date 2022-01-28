import ItemList from "../itemlist/ItemList.js"
import { StyledListContainer } from './ItemListContainerStyled'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { db } from "../../firebase/firebase.js"
import { getDocs, query, collection, where} from "firebase/firestore"

console.log("Firebase:")
console.log(db)

const ItemListContainer = ({ user, greeting }) => {
  // Fetch API
  const [list, setList] = useState([]);
  const { id } = useParams();
  console.log(id)
  
  useEffect(() => {

     const products_collection = collection(db, "products")

      if (id !== undefined) {

        const consulta = query(products_collection, where("category", "==", id))
        getDocs(consulta)
        getDocs(consulta)
            .then(({ docs }) => {
                setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
            .catch(err => {
                console.log(err)
            })
          
      } else {
    
    getDocs(products_collection)
    .then(({ docs }) => {
        setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    })
    .catch(err => {
        console.log(err)
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

export default ItemListContainer