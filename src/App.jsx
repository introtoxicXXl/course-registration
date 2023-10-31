import { useState } from 'react';
import './App.css';
import Cart from './component/Cart/Cart';
import Courses from './component/Courses/Courses';
import Header from './component/Header/Header';
import swal from 'sweetalert';

function App() {
  const [carts, setCarts] = useState([]);
  const [credits, setCredits] = useState(20);
  const [creditHour, setCreditHour] = useState(0);
  const [prices, setPrices] = useState(0);


  const handelAddToCart = course => {
    const { price, credit } = course;
    if (carts.includes(course)) {
      return swal("OPPS", "You already add this course", "error");
    } else {
      setCarts([...carts, course]);
    }
    const remainingCredits = credits - credit;
    if (remainingCredits < 0) {
      return swal("OPPS", "Your credit hour is finished", "error");
    }
    setCredits(remainingCredits);
    setCreditHour(creditHour + credit);
    setPrices(prices + price);
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
            prices={prices}
            creditHour={creditHour}
            credit={credits}
            carts={carts}
          ></Cart>
        </div>
      </div>
    </>
  )
}

export default App
