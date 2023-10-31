import './App.css'
import Cart from './component/Cart/Cart'
import Courses from './component/Courses/Courses'
import Header from './component/Header/Header'

function App() {


  return (
    <>
        <div className='container mx-auto'>
          <Header></Header>
          <div className='flex'>
            <Courses></Courses>
            <Cart></Cart>
          </div>
        </div>
    </>
  )
}

export default App
