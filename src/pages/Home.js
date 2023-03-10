import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../components/Search';
import SearchItem from '../components/SearchItem';
import { fetchCountries } from '../redux/actions/tradeActions';
import ContentLoader from '../components/Loader';

const Home = () => {
    const dispatch = useDispatch();
    const [query, setquery] = useState("");
    const {Data,loading} = useSelector(state => state.trade);
    const [filteredData, setFilteredData] = useState(Data || []);
    const handleChange = (value) => setquery(value);

    useEffect(() => {
        if(Data.length < 1){
            fetchCountries()(dispatch);
        }
    }, []);

    useEffect(() => {
        if(query.length < 1){
          return  setFilteredData(Data);
        } else if(query.length > 0){
            const searchData = Data?.filter(item => item['EN Label']?.toLowerCase().includes(query.toLowerCase()));
            return setFilteredData(searchData);
        }
    }, [query])
    
    return ( 
        <main className='bg-secondary pt-5 pb-10 h-screen'>
            <header className='w-full px-5 py-10 border-b border-primary text-center'>
                <h5 className='gb font-bold text-xl'>
                    National Trade Data
                </h5>
            </header>
            <section className='pt-10 w-full text-center'>
                <h2 className='mb-6 text-base'>Search a Country</h2>
                <Search
                    value={query}
                    onChange={handleChange}
                    loading={false}
                    placeholder="e.g chile"
                />
            </section>
            <section className='px-5 mt-10 flex flex-wrap justify-center overflow-y-scroll'>
                { loading ? 
                    (<ContentLoader/>) : 
                    filteredData?.length > 0 ? 
                        filteredData?.map(item => {
                            if(item['EN Label']){
                                return (
                                    <SearchItem item={item['EN Label']} id={item} />
                                )
                            }
                        }) : 
                    query.length < 1 && Data.length > 0 ? (
                        Data?.map(item => {
                            if(item['EN Label']){
                                return (
                                    <SearchItem item={item['EN Label']} id={item} />
                                )
                            }
                        })
                ) : (
                    <p className='pt-20 font-bold gb text-2xl text-center'>
                        Data Not Found
                    </p>
                )}
            </section>
        </main>
     );
}
 
export default Home;