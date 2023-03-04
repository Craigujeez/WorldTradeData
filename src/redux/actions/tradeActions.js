import axios from "axios";
import { 
    IS_LOADING_TRUE, IS_LOADING_FALSE, FETCH_COUNTRY_IMPORT_DATA,
    FETCH_COUNTRY_DATA , FETCH_COUNTRY_EXPORT_DATA 
} from "../types/tradeTypes";



export const fetchCountries = () => async (dispatch) => {
  try {
    // Set loading to true before endpoint call
    dispatch({ type: IS_LOADING_TRUE });
    const response = await axios.get("https://oec.world/olap-proxy/members?cube=trade_i_baci_a_92&level=Country&locale=en");
    if (response.data.data) {
      const { data } = response.data;
      dispatch({ type: FETCH_COUNTRY_DATA, payload: data });
      dispatch({ type: IS_LOADING_FALSE });
      return 
    }

  } catch (error) {
    // Set loading to false after endpoint call is not successful
    dispatch({ type: IS_LOADING_FALSE });
    // handleError(error);
  }
};
export const fetchCountryImports = (id,year,setLoading) => async (dispatch) => {
  try {
    // Set loading to true before endpoint call
    setLoading(true);
    const response = await axios.get(`https://oec.world/olap-proxy/data.jsonrecords?Importer+Country=${id}&Year=${year}&cube=trade_i_baci_a_92&drilldowns=HS2&measures=Trade+Value&token=6e4305fa81874 05a83a49c15de8dac1e`);
    if (response.data.data) {
      const { data } = response.data;
      dispatch({ type: FETCH_COUNTRY_IMPORT_DATA, payload: data });
        setLoading(false);
      return 
    }
    setLoading(false);
  } catch (error) {
    // Set loading to false after endpoint call is not successful
    setLoading(false);
    // handleError(error);
  }
};
export const fetchCountryExports = (id,year,setLoading) => async (dispatch) => {
  try {
    // Set loading to true before endpoint call
    setLoading(true);
    const response = await axios.get(`https://oec.world/olap-proxy/data.jsonrecords?Exporter+Country=${id}&Year=${year}&cube=trade_i_baci_a_92&drilldowns=HS2&measures=Trade+Value&token=6e4305fa81874 05a83a49c15de8dac1e`);
    if (response.data.data) {
      const { data } = response.data;
      dispatch({ type: FETCH_COUNTRY_EXPORT_DATA, payload: data });
      setLoading(false);
    return 
    }
    setLoading(false);
  } catch (error) {
    // Set loading to false after endpoint call is not successful
    setLoading(false);
    // handleError(error);
  }
};