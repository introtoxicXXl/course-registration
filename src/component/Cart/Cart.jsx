import PropTypes from 'prop-types';

Cart.propTypes = {
    carts:PropTypes.array.isRequired,
    credit:PropTypes.number,
};

function Cart({carts,credit}) {
    return (
        <div className='w-1/4 ml-4'>
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
                    <h2 className='text-base font-semibold'>Total Credit Hour : 13</h2>
                    <hr className='my-2' />
                    <h2 className='text-base font-semibold'>Total Price : 48000 USD</h2>
                </div>
            </div>
        </div>
    );
}

export default Cart;