import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css'
import { doc, getDoc} from 'firebase/firestore';
import { db } from '../../firebase/config';


export default function ItemDetailContainer() {

    const [item, setItem] = useState(null);
    const {id} = useParams()

    useEffect(() => {

        const docRef = doc(db, "productos", id);

        getDoc(docRef)
          .then((resp) => {
            setItem(
              { ...resp.data(), id: resp.id}
            );
          })
    }, [id])

  return (
    <div className="itemDetailContainer">
      {item && <ItemDetail item={item} />}
    </div>
  )
}
