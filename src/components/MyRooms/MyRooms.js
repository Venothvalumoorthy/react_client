import { useState, useEffect, useRef } from "react";
import Navigation from "../Navigation/Navigation";
import AddRoommodal from "../Modals/AddRoommodal";
import axios from "axios";
import OwnerRooms from "../ViewRooms/OwnerRooms";

const MyRooms = ()=>{
    const [userId, setUsersId] = useState("");
    const [tokenId, setTokenId] = useState("");

    useEffect(() => {
      const user = localStorage.getItem('user');
  
      if (user) {
        setUsersId(JSON.parse(user)._id);
      }

      const token = localStorage.getItem('token');
  
      if (token) {
        setTokenId(token);
      }
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const nameRef = useRef("");
    const num_bedsRef = useRef("");
    const floor_sizeRef = useRef("");
    const amenitiesRef = useRef("");
    const maximum_bookingRef  = useRef("");
    const minimum_bookingRef = useRef("");
    const imageRef = useRef("");
    const priceRef = useRef("");

    const onSubmitRoom = (event)=>{
        event.preventDefault();
        let name = nameRef.current.value;
        let num_beds = num_bedsRef.current.value;
        let floor_size = floor_sizeRef.current.value;
        let amenities = amenitiesRef.current.value;
        let minimum_booking = minimum_bookingRef.current.value;
        let maximum_booking = maximum_bookingRef.current.value;
        let price = priceRef.current.value;
        let image = imageRef.current.files[0];
        let owner = userId
        if(name === "" || num_beds === "" || floor_size === "" || amenities === "" || minimum_booking === "" || maximum_booking === "" || price === ""){
            alert("Please fill all the fields.")
        }else if(image === undefined){
            alert("Please upload the image.")
        }else{
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = () => {
              let base64 =reader.result;
                     axios.post(`${process.env.REACT_APP_API_URL}/house/rooms/insert`, {
                        data: {
                            name, num_beds, owner, image:base64,floor_size, minimum_booking, maximum_booking, price, amenities
                        }
                        }, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${tokenId}`
                        }
                        })
                        .then((response) => {
                                if(response.data.status === "SUCCESS"){
                                    window.location.reload();
                                }else{
                                alert(response.data.errors)
                                }
                        })
                        .catch((error) => {
                            alert(error);
                        });
            };
        }
    }
    return(
        <div className="container-fluid p-0">
        <Navigation />
        <div className="container">
        <button className="btn btn-primary ms-auto d-block" onClick={() => {setIsOpen(true)}}>Add Room</button>
        <AddRoommodal isOpen={isOpen}  onHide={() => {setIsOpen(false)}} onSubmitRoomHandler={onSubmitRoom} values={{nameRef,num_bedsRef, floor_sizeRef, amenitiesRef, maximum_bookingRef, minimum_bookingRef, imageRef, priceRef}} />
        <OwnerRooms userId ={userId} token={tokenId} />
        </div>
        </div>
    );
}

export default MyRooms;