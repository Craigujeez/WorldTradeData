import React from 'react'
import {Plot} from "d3plus-react";
import { currency } from '../helpers';

const Charts = ({data}) => {
    const refinedData = data.map((item,indx) => {
        return { id: item['HS2'] + `: ${currency.format(item['Trade Value'])}` , x: indx + 1, y: item['Trade Value'] }
    })
    return ( 
        <Plot
          config={{
            data: refinedData,
            groupBy: "id",
            height: "500",
            barPadding: "20",
        }} />
    );
}
 
export default Charts;