import { useState } from 'react';
import './App.css';
import Cart from './component/Cart/Cart';
import Courses from './component/Courses/Courses';
import Header from './component/Header/Header';
import swal from 'sweetalert';

function App() {
  const [carts, setCarts] = useState([]);
  const [credits, setCredits] = useState(20);


  const handelAddToCart = course => {
    const { price, credit } = course;
    if (carts.includes(course)) {
      return swal("OPPS", "You already add this course", "error");
    } else {
      setCarts([...carts, course]);
    }
    const remainingCridets = credits - credit;
    if (remainingCridets < 0) {
      return swal("OPPS", "Your credit hour is finished", "error");
    }
    setCredits(remainingCridets);
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
            credit={credits}
            carts={carts}
          ></Cart>
        </div>
      </div>
    </>
  )
}

export default App
