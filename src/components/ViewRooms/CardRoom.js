import classes from "./CardRoom.module.css";
const CardRoom = (props)=>{
  
    return (
        
        <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="shadow">
            <div className="position-relative">
                <img className="w-100 d-block" src={props.image} alt="fwewe" />
                <div className={classes.price_top}>
                    <h6 className="text-white">Rs {props.price}</h6>
                    <p className="text-white">per night</p>
                </div>
            </div>
            <p className="p-2 text-center text-capitalize fw-bold bg-light">{props.name}</p>
        </div>
    </div>
    )
}

export default CardRoom;