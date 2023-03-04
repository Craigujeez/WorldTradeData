import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TradeCard from '../components/TradeCards';
import { fetchCountryExports, fetchCountryImports } from '../redux/actions/tradeActions';

const SinglePage = () => {
    const params = useParams();
    const {imports,exports,Data} = useSelector(state => state.trade)
    const SelectedCountry = Data?.filter(item => item.ID === params?.id);
    return ( 
        <main className='bg-secondary  h-screen overflow-y-scroll'>
            <header className='bg-primary text-center p-10'>
                <h1 className='text-white text-3xl font-bold'>{SelectedCountry[0]?.Label}</h1>
            </header>
            <Link to="/">
                <p className='text-sm text-primary underline leading-7 m-5 cursor-pointer'>Back</p>
            </Link>
            <section className='flex flex-wrap justify-center'>
                <TradeCard
                    title="Import Data"
                    fetchedData={imports}
                    fetchData={fetchCountryImports}
                    id={params?.id}
                />
                <TradeCard
                    title="Export Data"
                    fetchedData={exports}
                    fetchData={fetchCountryExports}
                    id={params?.id}
                />
            </section>
        </main>
     );
}
 
export default SinglePage;