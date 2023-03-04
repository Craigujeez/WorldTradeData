import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Charts from './Charts';
import ContentLoader from './Loader';

const TradeCard = ({title,fetchData,id,fetchedData}) => {
    const dispatch = useDispatch();
    const [year, setyear] = useState(2020);
    const [loading, setLoading] = useState(false);
    const yearData = [2020,2021,2022,2023];
    
    const handleChange = (e) => {
        setyear(e.target.value);
        fetchData(id,e.target.value,setLoading)(dispatch);
    };

    useEffect(() => {
      fetchData(id,year,setLoading)(dispatch);
    }, []);
    
    return ( 
        <article className='w-5/12 max-w-xl min-w-350 p-5 rounded-md shadow-sm bg-white m-5 tablet:w-full'>
            <aside className='flex justify-between mb-4'>
                <h1 className='pt-2 font-semibold gs text-lg text-primary'>{title}</h1>
                <select className='p-2.5 border border-primary bg-secondary rounded-md' onChange={handleChange}>
                    {yearData.map(item => {
                        return(
                            <option value={item}>{item}</option>
                        );
                    })}
                </select>
            </aside>
            {loading ? (
                <ContentLoader/>
            ) : (
                <Charts data={fetchedData} />
            )}
        </article>
     );
}
 
export default TradeCard;