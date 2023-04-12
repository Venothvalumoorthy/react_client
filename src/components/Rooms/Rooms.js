import Navigation from "../Navigation/Navigation";
import { useState, useEffect } from 'react';
import CardRoom from "./../ViewRooms/CardRoom";
import axios from "axios";
// import { DateRangePicker } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; 

const Rooms = ()=>{
    // const [dateRange, setDateRange] = useState({
    //     startDate: new Date(),
    //     endDate: new Date(),
    //     key: 'selection'
    // });

    const token = localStorage.getItem('token');
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        if(token !== ""){
        axios.post(`${process.env.REACT_APP_API_URL}/house/rooms/search`, {
            data: { }
            }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            })
            .then((response) => {
                    if(response.data.status === "SUCCESS"){
                        setRooms(response.data.rooms)
                    }else{
                    alert(response.data.errors)
                    }
            })
            .catch((error) => {
                alert(error);
            });
        }
    });

    return (
        <div>
            <Navigation />
            {/* <DateRangePicker  ranges={[dateRange]}   onChange={(ranges) => setDateRange(ranges.selection)}/> */}
            <div className="row mt-3 mx-3">
            {rooms.map((room)=>{
              return  <CardRoom image={room.images[0]} name={room.name} price={room.price} _id={room._id} type={"user"} />
            })}
        </div>
        </div>
    )
}

export default Rooms;
