import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import pedirProductoporId from '../pedirProductoPorId';
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css'


export default function ItemDetailContainer() {

    const [item, setItem] = useState(null);
    const {id} = useParams()

    useEffect(() => {
        pedirProductoporId(Number(id))
            .then((res) => {
                setItem(res);
            })
    }, [id])

  return (
    <div className="itemDetailContainer">
      {item && <ItemDetail item={item} />}
    </div>
  )
}
