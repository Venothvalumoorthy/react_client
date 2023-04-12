import classes from "./CardRoom.module.css";
import editimage from "./../../images/edit.svg";

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
            <div className="d-flex justify-content-between  bg-light p-2">
            <p className="p-2 text-center text-capitalize fw-bold mb-0">{props.name}</p>
            {props.type === "owner" && <img src={editimage} width="20px" onClick={props.onEdit} alt="edit"  />}
            </div>
        </div>
    </div>
    )
}

export default CardRoom;