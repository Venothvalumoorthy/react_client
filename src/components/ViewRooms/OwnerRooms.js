import { useState, useEffect } from "react";
import axios from "axios";
import CardRoom from "./CardRoom";
import EditRoomModal from "./../Modals/EditRoomModal";

const OwnerRooms = (props)=>{
    const [rooms, setRooms] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    useEffect(() => {
    
      axios.post(`${process.env.REACT_APP_API_URL}/house/rooms/search`, {
            data: {
               owner:user._id
            }
            }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            })
            .then((response) => {
                    if(response.data.status === "SUCCESS"){
                        setRooms(response.data.rooms);
                    }else{
                    alert(response.data.errors)
                    }
            })
            .catch((error) => {
                alert(error);
            });
    },[]);

    const [isOpen, setIsOpen] = useState(false);
    const [room, setRoom] = useState({});
    console.log(room);
    

    return(
        <div >
            <div className="row mt-3">
            {rooms.map((room)=>{
              return  <CardRoom key={room._id} image={room.images[0]} name={room.name} price={room.price} _id={room._id} type={"owner"} onEdit={()=>{setRoom(room); setIsOpen(true)}}  />
            })}
            </div>
            <EditRoomModal  isOpen={isOpen} room={room} name={room.name} onHide={()=> {setIsOpen(false)}}/>
        </div>    
    )
}

export default OwnerRooms;