import React from "react";
import "./Shelf.css"
import Book from "../Book/Book";
import capa1 from './percepolis.png';
import capa2 from './maus.jpeg';
import capa3 from './capitao.jpeg';
import capa4 from './maravilha.jpeg';
import capa5 from './frank.jpeg';
import {IoIosStar} from "react-icons/io";
import {IoIosStarOutline} from "react-icons/io";


function Shelf(){
    return(
        <div id="prateleira">
            <Book livro={capa1} titulo="Percepolis"star1={<IoIosStar/>} star2={<IoIosStar/>} star3={<IoIosStar/>} star4={<IoIosStar/>} star5={<IoIosStar/>}/>
            <Book livro={capa2} titulo="Maus"star1={<IoIosStar/>} star2={<IoIosStar/>} star3={< IoIosStar/>} star4={< IoIosStarOutline/>} star5={<IoIosStarOutline/>}/>
            <Book livro={capa3} titulo="Capitao Cueca"star1={<IoIosStar/>} star2={<IoIosStarOutline/>} star3={< IoIosStarOutline/>} star4={<IoIosStarOutline/>} star5={<IoIosStarOutline/>}/>
            <Book livro={capa4} titulo="Mulher Maravilha"star1={< IoIosStar/>} star2={<IoIosStar/>} star3={< IoIosStar/>} star4={<IoIosStar/>} star5={<IoIosStarOutline/>}/>
            <Book livro={capa5} titulo="Frankenstein "star1={<IoIosStar/>} star2={<IoIosStar/>} star3={<IoIosStar/>} star4={<IoIosStarOutline/>} star5={<IoIosStarOutline/>}/>
        </div>
    );
}
export default Shelf;