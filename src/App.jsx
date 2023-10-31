import { useState } from 'react';
import './App.css';
import Cart from './component/Cart/Cart';
import Courses from './component/Courses/Courses';
import Header from './component/Header/Header';
import swal from 'sweetalert';

function App() {
  const [carts, setCarts] = useState([]);


  const handelAddToCart = course => {
    if(carts.includes(course)){
      swal("OPPS", "You already add this course", "error");
    }else{
      setCarts([...carts,course]);
    }
    
    
  }

  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>
        <div className='flex'>
          <Courses
            handelAddToCart={handelAddToCart}
          ></Courses>
          <Cart
          carts={carts}
          ></Cart>
        </div>
      </div>
    </>
  )
}

export default App
