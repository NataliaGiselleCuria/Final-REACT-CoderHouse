import { Link } from "react-router-dom";

export default function LiNavBar({id, path , texto}){

    return(
        
        <>
        <li id="link" className="nav-item">
            <Link id={id} className="nav-link active" aria-current="page" to={path}>{texto}</Link>
        </li>
        </>
    )      
}