import React from 'react'

const Search = ({loading,onChange,value,placeholder}) => {
    return (  
        <div className="w-full max-w-xs mx-auto border border-primary bg-secondary rounded-md flex px-5 py-3 relative">
            <input 
                className='border-none outline-none text-sm text-black font-semibold bg-transparent' 
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                placeholder={placeholder}
            />
            {loading && (
                <div className="icon-container">
                <i className="loader"></i>
                </div>
            )}
        </div>
    );
}
 
export default Search;