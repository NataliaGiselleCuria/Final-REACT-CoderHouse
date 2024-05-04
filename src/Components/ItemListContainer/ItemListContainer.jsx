import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect} from 'react';
import LiNavBar from '../LiNavBar/LiNavBar'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

export default function ItemListContainer(){

    const [productos, setProductos] = useState([]);
    const { category} = useParams();

    useEffect(() => {

        const productosRef = collection(db, "productos");

        const q = category ? query(productosRef, where("category", "==", category)) : productosRef;

        getDocs(q)
         .then((resp) =>{
            let categoria = false;
            setProductos(
                
                resp.docs.map((doc) => {
                     
                    while(!categoria){

                        const catLi = document.querySelectorAll('.categorias .nav-item')

                        if (category){   
                            catLi.forEach(cat => {
                                if(category==cat.firstChild.id){
                                    cat.firstChild.classList.toggle('cat-active');
                                }else{  
                                    cat.firstChild.classList.remove('cat-active');
                                }
                            });
        
                        } else {
    
                            catLi[0].firstChild.classList.toggle('cat-active');
                            catLi[1].firstChild.classList.remove('cat-active');
                            catLi[2].firstChild.classList.remove('cat-active');
                        }
                        categoria = true;
                    }
                         
                    return { ...doc.data(), id: doc.id }
                })
            )
          
        })

    },[category])
   

    return(
        <div className="itemListeConteiner">
            <h4>PRODUCTOS</h4>
            <ul className="navbar-nav categorias">
                <LiNavBar id="todos" texto="TODOS" path="/productos"/>
                <LiNavBar id="vajillas" texto="VAJILLA" path="/productos/vajillas"/>
                <LiNavBar id="deco" texto="DECO" path="/productos/deco"/>
            </ul>
            <ItemList productos={productos}/>
            
        </div>
    )      
}