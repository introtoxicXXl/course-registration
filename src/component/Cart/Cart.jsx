import PropTypes from 'prop-types';

Cart.propTypes = {
    carts:PropTypes.array.isRequired,
    credit:PropTypes.number.isRequired,
    creditHour:PropTypes.number.isRequired,
    prices:PropTypes.number.isRequired
};

function Cart({carts,credit,creditHour,prices}) {
    return (
        <div className='w-full md:w-1/4 md:ml-4 ml-0 md:mt-0 mt-4'>
            <div className='bg-white p-6 rounded-lg'>
                <div>
                    <h2 className='text-lg font-bold text-sky-500'>Credit Hour Remaining {credit} hr</h2>
                    <hr className='my-2' />
                    <h2 className='text-xl font-bold mb-4'>Course Name</h2>
                    <ul role="list" className='list-decimal mb-3'>
                       {
                        carts.map((cart,idx)=><li className='ml-4 text-base text-[#1C1B1B99]' key={idx}>{cart.title}</li>)
                       }
                    </ul>
                    <hr className='my-2' />
                    <h2 className='text-base font-semibold'>Total Credit Hour : {creditHour}</h2>
                    <hr className='my-2' />
                    <h2 className='text-base font-semibold'>Total Price : {prices} USD</h2>
                </div>
            </div>
        </div>
    );
}

export default Cart;