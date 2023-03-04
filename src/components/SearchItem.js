import React from 'react'
import { Link } from 'react-router-dom';

const SearchItem = ({item,id}) => {
    return ( 
        <Link to={`country/${id?.ID}`}>
            <div className=' w-56 bg-primary rounded-md p-5 cursor-pointer hover:opacity-90 m-5 ' key={id?.ID}>
                <p className='text-white gb font-bold text-center'>{item}</p>
            </div>
        </Link>
     );
}
 
export default SearchItem;