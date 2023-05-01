import React from "react";
import './Header.css'

function Header(props){
    return(
        <header>
            <div id="perfil">
            <img id="foto" src={props.imagem} alt="usuario"  />
            <span>
            {props.nome}
            </span>
            </div>

            <div id="lidos">
                <h2>Livros lidos 
                <br></br>
                {props.numero_lido}</h2>
            </div>

            <div id="ler">
                <h2>Vou ler 
                <br></br>
                {props.numero_ler}</h2>
            </div>
        </header>
    );
}

export default Header;