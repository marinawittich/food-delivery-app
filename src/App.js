import './App.css';
import Cart from './Components/Cart/Cart';
import photo from './photo.jpg';
import Dishes from './Components/FoodComponents/Dishes';

function App() {
  return (
    <div className='info'>
      <h1 className="header"><span className="span">eat</span>com</h1>
      <h3 className="subHeader">Food Delivery</h3>
      <img className='topImg' src={photo} alt="photo" width="95%"/>
    <div className="App">
      
      <div className='dishCont'>
      <Dishes/>
     
      </div>
      <div className='cartCont'>
      <Cart/>
      </div>
    </div>
    </div>
  );
}

export default App;
