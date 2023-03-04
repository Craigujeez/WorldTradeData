import { FETCH_COUNTRY_DATA, FETCH_COUNTRY_EXPORT_DATA, FETCH_COUNTRY_IMPORT_DATA } from "../types/tradeTypes";

const INITIAL_STATE = {
  Data: [],
  imports: [],
  exports: []
};

const TradeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_DATA:
      return {
        ...state,
        Data: action.payload,
      };
    case FETCH_COUNTRY_IMPORT_DATA:
        return {
            ...state,
            imports: action.payload
        }
    case FETCH_COUNTRY_EXPORT_DATA:
        return {
            ...state,
            exports: action.payload
        }
    default:
      return state;
  }
};

export default TradeReducer;