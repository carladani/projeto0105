import profile from './profile.jpg';
import bichos from './bichos.jpeg';
import casmurro from './casmurro.jpeg';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Shelf from './Components/Shelf/Shelf';
import Review from './Components/Review/Review';
import Vote from './Components/Vote/Vote';
import {IoIosHeart} from "react-icons/io";
import {IoIosGift} from "react-icons/io";
import {IoIosStar} from "react-icons/io";
import {IoIosChatbubbles} from "react-icons/io";

function App() {
  return (
  <div className="App">
      <Header  nome="Carla Dani" numero_lido="5"  numero_ler="2" imagem={profile}/>
      <hr></hr>

      <div id="line1">

        <div className="esqueda">
        <Menu texto1="Favorito" icone1={< IoIosHeart/>} texto2="Desejado" icone2={<IoIosGift/>} icone3={< IoIosStar/>} icone4={<IoIosChatbubbles/>} texto3="Avaliado" texto4="Resenha"/>
        </div>

        <div className="direita">
        <h2>Minha estante</h2>
        <Shelf/>
         </div>
     </div>
     <div id="reviews">
      <h2>Resenhas</h2>
        <div>
      <Review obra="Rev. dos bichos" capa={bichos} titulo="O  totalitarismo contado por animais" texto="Fusce tincidunt lacus neque, vitae luctus elit egestas cursus. Proin quis consequat tortor. Aenean molestie dolor vel lacus ullamcorper dapibus a in ipsum. Sed eget purus urna. Nullam id felis sed enim gravida rutrum vitae a risus. Nullam iaculis vel libero non rhoncus. Proin velit augue, ultrices sit amet ipsum quis, dapibus egestas lectus. Phasellus dictum vel urna eget ultricies. Nulla elementum diam a dui fermentum, vel facilisis orci imperdiet. Nulla auctor et urna sit amet eleifend. Ut elementum maximus sem, non pharetra magna vulputate sed. Suspendisse sed nisl sodales, finibus neque ac, tempus ante."/>
        </div>
        <div>
        <Review obra="Dom Casmurro" capa={casmurro} titulo="O ciume dissimulado" texto="Fusce tincidunt lacus neque, vitae luctus elit egestas cursus. Proin quis consequat tortor. Aenean molestie dolor vel lacus ullamcorper dapibus a in ipsum. Sed eget purus urna. Nullam id felis sed enim gravida rutrum vitae a risus. Nullam iaculis vel libero non rhoncus. Proin velit augue, ultrices sit amet ipsum quis, dapibus egestas lectus. Phasellus dictum vel urna eget ultricies. Nulla elementum diam a dui fermentum, vel facilisis orci imperdiet. Nulla auctor et urna sit amet eleifend. Ut elementum maximus sem, non pharetra magna vulputate sed. Suspendisse sed nisl sodales, finibus neque ac, tempus ante.
        Fusce tincidunt lacus neque, vitae luctus elit egestas cursus. Proin quis consequat tortor. Aenean molestie dolor vel lacus ullamcorper dapibus a in ipsum. Sed eget purus urna. Nullam id felis sed enim gravida rutrum vitae a risus. Nullam iaculis vel libero non rhoncus. Proin velit augue, ultrices sit amet ipsum quis, dapibus egestas lectus. Phasellus dictum vel urna eget ultricies. Nulla elementum diam a dui fermentum, vel facilisis orci imperdiet. Nulla auctor et urna sit amet eleifend. Ut elementum maximus sem, non pharetra magna vulputate sed. Suspendisse sed nisl sodales, finibus neque ac, tempus ante."/>

        </div>
     </div>
     <div id="bottom">
     <Vote numero={4}/>
     </div>

  </div>
  );
}

export default App;
