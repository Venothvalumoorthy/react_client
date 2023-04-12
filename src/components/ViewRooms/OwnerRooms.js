import { useState, useEffect } from "react";
import axios from "axios";
import CardRoom from "./CardRoom";

const OwnerRooms = (props)=>{
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        if(props.userId !== ""){
        axios.post(`${process.env.REACT_APP_API_URL}/house/rooms/search`, {
            data: {
               owner:props.userId
            }
            }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
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
    }, [props.userId]);

    return(
        <div className="row mt-3">
            {rooms.map((room)=>{
              return  <CardRoom image={room.images[0]} name={room.name} price={room.price} />
            })}
        </div>
    )
}

export default OwnerRooms;