import React from "react";
import "./Vote.css"
import Book from "../Book/Book";
import capa6 from './spider.jpeg';
import {IoIosStar} from "react-icons/io";
import {IoIosStarOutline} from "react-icons/io";
/*import { useState } from 'react';

export default function Counter() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAgeChange() {
    setAge(age + 1);
  }

  return (
    <>
      <input
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={handleAgeChange}>
        Increment age
      </button>
      <p>Hello, {name}. You are {age}.</p>
    </>
  )
}
*/

function Vote(props){
    let a = props.numero;
    if(a===4){
    /*let b;
    if (a===0){
    b = <Book livro={capa6} titulo="Rev. dos bichos"star1={<IoIosStar/>} star2={<IoIosStar/>} star3={<IoIosStar/>} star4={<IoIosStar/>} star5={<IoIosStarOutline/>}/>}

    else if (a===2){
    <Book livro={capa6} titulo="Rev. dos bichos"star1={<IoIosStar/>} star2={<IoIosStar/>} star3={<IoIosStar/>} star4={<IoIosStarOutline/>} star5={<IoIosStarOutline/>}/>}
    else if (a===3){
        <Book livro={capa6} titulo="Rev. dos bichos"star1={<IoIosStar/>} star2={<IoIosStar/>} star3={<IoIosStarOutline/>} star4={<IoIosStarOutline/>} star5={<IoIosStarOutline/>}/>}
    else{<Book livro={capa6} titulo="Rev. dos bichos"star1={<IoIosStar/>} star2={<IoIosStarOutline/>} star3={<IoIosStarOutline/>} star4={<IoIosStarOutline/>} star5={<IoIosStarOutline/>}/>}*/
    return(
        <div id="vote">
            <div>
                <h2>Avalie um livro:</h2>
                <input type="number" placeholder="de 1 a 5..." />
                if(a===4){
                <Book livro={capa6} titulo="Rev. dos bichos"star1={<IoIosStar/>} star2={<IoIosStar/>} star3={<IoIosStar/>} star4={<IoIosStar/>} star5={<IoIosStarOutline/>}/>}
                

             </div>

        </div>
    );
}
}
export default Vote;