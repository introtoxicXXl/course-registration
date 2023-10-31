import PropTypes from 'prop-types';
import { FaReadme } from 'react-icons/fa';

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handelAddToCart: PropTypes.func.isRequired
};

function Course({ course, handelAddToCart }) {
    const { img, title, credit, description, price } = course;

    return (
        <div className="card bg-base-100 shadow-xl p-4 space-y-3">
            <figure><img className='w-full' src={img} alt="Shoes" /></figure>
            <div className="space-y-3">
                <h2 className="text-[#1C1B1B] text-lg font-semibold">{title}</h2>
                <p className='text-sm text-justify text-[#1C1B1B99]'>{description}</p>
                <div className='flex justify-between'>
                    <p>Price: ${price}</p>
                    <p className='flex items-center'> <span className='mr-3 text-lg'><FaReadme></FaReadme> </span>Credit: {credit}hr</p>
                </div>
                <div className="items-center">
                    <button onClick={() => handelAddToCart(course)} className="btn btn-info text-white w-full">Select</button>
                </div>
            </div>
        </div>
    );
}

export default Course;