import PropTypes from 'prop-types';

Cart.propTypes = {

};

function Cart() {
    return (
        <div className='w-1/4 ml-4'>
            <div className='bg-white p-6 rounded-lg'>
                <div>
                    <h2 className='text-lg font-bold text-sky-500'>Credit Hour Remaining 7 hr</h2>
                    <hr className='my-2' />
                    <h2 className='text-xl font-bold mb-4'>Course Name</h2>
                    <ul role="list" className='list-decimal mb-3'>
                       
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