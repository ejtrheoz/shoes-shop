import { Link } from 'react-router-dom';
import './BottomMenu.css';

function BottomMenu(){
    return(
        <div className="bottom-text">
            <a href="/">Domov</a>
            <a href="/Products#">Produkty</a>
            <a href="/About#">O nás</a>
            <a href="/Contacts#">Kontakty</a>
        </div>
    );
}

export default BottomMenu;