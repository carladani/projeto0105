import React from "react";
import './Menu.css'


function Menu(props){
    return(
        <div id="painel">
            <h2>Selecione as opções...</h2>
            <button>{props.texto1}{props.icone1}</button>
            <button>{props.texto2}{props.icone2}</button>
            <button>{props.texto3}{props.icone3}</button>
            <button>{props.texto4}{props.icone4}</button>
            
        </div>
    );
}

export default Menu;