import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect} from 'react';
import pedirProductos from '../pedirProductos';
import LiNavBar from '../LiNavBar/LiNavBar'
import { useParams } from 'react-router-dom';

export default function ItemListContainer(){

    const catLi = document.querySelectorAll('.categorias .nav-item')

    const [productos, setProductos] = useState([]);
    const {category} = useParams();

    useEffect(() => {

        pedirProductos()
            .then((res) => {
                if(category){
                    setProductos(res.filter((prod) => prod.category === category));

                    catLi.forEach(cat => {
                        if(category==cat.firstChild.id){
                            cat.firstChild.classList.toggle('cat-active');
                        }else{  
                            cat.firstChild.classList.remove('cat-active');
                        }
                    });

                } else {
                    setProductos(res);
   
                    catLi[0].firstChild.classList.toggle('cat-active');
                    catLi[1].firstChild.classList.remove('cat-active');
                    catLi[2].firstChild.classList.remove('cat-active');
                }    
            })
            .catch((error) => {
                console.error(error)
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