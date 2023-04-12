import Navigation from "../Navigation/Navigation";
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 

const Rooms = ()=>{
    const [dateRange, setDateRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    return (
        <div>
            <Navigation />
            <DateRangePicker  ranges={[dateRange]}   onChange={(ranges) => setDateRange(ranges.selection)}/>

        </div>
    )
}

export default Rooms;
