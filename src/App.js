import './App.css';
import React from 'react';
import { Button} from 'reactstrap';
import NavBarV1 from './components/NavBars/NavBarV1';
import ButtonsV1 from './components/Buttons/ButtonsV1';
import FormV1 from './components/Forms/FormV1';
import CardsV1 from './components/Cards/CardsV1';
import CardsV2 from './components/Cards/CardsV2';
import ModalV1 from './components/Modals/ModalV1';
import CarouselV1 from './components/Carousel/CarouselV1';
import CarouselV2 from './components/Carousel/CarouselV2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><Button color="danger">Hallo from Ghost Coder</Button>
          <div> <NavBarV1 /></div><hr />
          <div> <ButtonsV1 /></div> <hr />
          <div> <FormV1 /></div> <hr />
          <div> <ModalV1 /></div><hr />
          <div> <CardsV1 /></div><hr />
          <div> <CardsV2 /></div><hr />
        </div>
      </header>
    </div>
  );
}
export default App;
