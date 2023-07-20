import React, { useState } from 'react';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRangePicker} from "react-date-range";
import "./search.css"
import { Button } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People'
import { History } from 'react-dom';

function Search() {
  // const history= useHistory();
    const [starDate, setStartDate]= useState(new Date());
    const [endDate, setEndDate]= useState(new Date());

    const selectionRange ={
        starDate: starDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.starDate);
        setEndDate(ranges.selection.endDate);
    }
  return (
    <div className="search">
        <DateRangePicker ranges={
            [selectionRange]} onChange={handleSelect}/>
            <h2>Number of guests <PeopleIcon/></h2>
             <input min={0} 
                   drfaulatValue={2} type="number" />
              {/* <a herf='/search'>      */}
              <Button>Search Airbnb</Button>   
              {/* </a> */}
    </div>
  )
}

export default Search