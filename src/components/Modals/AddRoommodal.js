import { Modal, Button } from 'react-bootstrap';


const AddRoommodal = (props)=>{
  const options =[];
  for (let i = 1; i <= 30; i++) {
    options.push(<option value={i}>{i}</option>);
  }

    return(
        <Modal show={props.isOpen} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Add Rooms</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label for="name" className="form-label">Room name</label>
              <input type="text" className="form-control shadow" name="name" id="room_name"  ref={props.values.nameRef} />
            </div>
            <div className="mb-3">
              <label for="amenities" className="form-label">Amenities</label>
              <input type="text" className="form-control shadow" name="amenities" id="amenities" ref={props.values.amenitiesRef} />
            </div>
            <div className="mb-3">
            <label for="beds" className="form-label">Number of beds</label>
              <select className="form-control shadow" name="beds" id="num_beds"  ref={props.values.num_bedsRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="floor_size" className="form-label">Floor size</label>
              <input type="text" className="form-control shadow" name="floor_size" id="floor_size" ref={props.values.floor_sizeRef}/>
            </div>
            <div className="mb-3">
              <label for="price" className="form-label">Price</label>
              <input type="text" className="form-control shadow" name="price" id="price" ref={props.values.priceRef}/>
            </div>
            <div className="mb-3">
            <label for="min_booking_days" className="form-label">Minimum booking days</label>
              <select className="form-control shadow" name="min_booking_days" id="min_booking_days"  ref={props.values.minimum_bookingRef}>
                { options }
              </select>
            </div>
            <div className="mb-3">
            <label for="max_booking_days" className="form-label">Maximun booking days</label>
              <select className="form-control shadow" name="max_booking_days" id="max_booking_days"  ref={props.values.maximum_bookingRef}>
                { options }
              </select>
            </div>
            <div className="mb-3">
            <label for="upload_image" className="form-label">Upload Image</label>
              <input type="file" accept='image/*' className='form-control shadow' id='upload-image' ref={props.values.imageRef} />
            </div>
          </form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
          <Button variant="primary" onClick={props.onSubmitRoomHandler}>Submit</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default AddRoommodal;