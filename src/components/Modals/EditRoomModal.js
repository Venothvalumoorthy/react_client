import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios";

const EditRoomModal = (props)=>{
  const options =[];
  for (let i = 1; i <= 30; i++) {
    options.push(<option value={i}>{i}</option>);
  }

  console.log(props.room)
  const _id = props.room._id;
  const [name, setName]= useState(props.room.name);
  const [num_beds, setNumbeds]= useState(props.room.num_beds);
  const [floor_size, setFloorSize]= useState(props.room.floor_size);
  const [amenities, setamenities]= useState(props.room.amenities);
  const [minimum_booking, setMinimumBooking]= useState(props.room.minimum_booking);
  const [maximum_booking, setMaximumBooking]= useState(props.room.maximum_booking);
  const [image, setImage]= useState(props.room.image);
  const [price, setPrice]= useState(props.room.price);

  const submitHandler= (event)=>{
 
  }
    return(
        <Modal show={props.isOpen} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Room name</label>
              <input type="text" className="form-control shadow" name="name" id="room_name" value={name} onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div className="mb-3">
              <label htmlFor="amenities" className="form-label">Amenities</label>
              <input type="text" className="form-control shadow" name="amenities" id="amenities" value={amenities} onChange={(e)=>{setamenities(e.target.value)}} />
            </div>
            <div className="mb-3">
            <label htmlFor="beds" className="form-label">Number of beds</label>
              <select className="form-control shadow" name="beds" id="num_beds" value={num_beds} onChange={(e)=>{setNumbeds(e.target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="floor_size" className="form-label">Floor size</label>
              <input type="text" className="form-control shadow" name="floor_size" id="floor_size" value={floor_size} onChange={(e)=>{setFloorSize(e.target.value)}} />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input type="text" className="form-control shadow" name="price" id="price" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
            </div>
            <div className="mb-3">
            <label htmlFor="min_booking_days" className="form-label">Minimum booking days</label>
              <select className="form-control shadow" name="min_booking_days" id="min_booking_days" value={minimum_booking} onChange={(e)=>{setMinimumBooking(e.target.value)}}>
                { options }
              </select>
            </div>
            <div className="mb-3">
            <label htmlFor="max_booking_days" className="form-label">Maximun booking days</label>
              <select className="form-control shadow" name="max_booking_days" id="max_booking_days" value={maximum_booking} onChange={(e)=>{setMaximumBooking(e.target.value)}}>
                { options }
              </select>
            </div>
            <div className="mb-3">
            <label htmlFor="upload_image" className="form-label">Upload Image</label>
              <input type="file" accept='image/*' className='form-control shadow' id='upload-image' value={image} onChange={(e)=>{setImage(e.target.files[0])}} />
            </div>
          </form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
          <Button variant="primary" onClick={submitHandler}>Submit</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default EditRoomModal;