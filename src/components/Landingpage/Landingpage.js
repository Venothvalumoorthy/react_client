import Navigation from "../Navigation/Navigation";
import { useEffect, useState } from "react";
import classes from "./Landingpage.module.css";
import {NavLink} from "react-router-dom"

const LandingPage = ()=>{

    const [users, setUsersData] = useState(null);

  useEffect(() => {
    // Get data from local storage
    const user = localStorage.getItem('user');

    if (user) {
      // Update state with the stored data
      setUsersData(JSON.parse(user));
    }
  }, []);

  return (
        <div className="container-fluid p-0">
            <Navigation />
            <header className={classes.defaultHero}>
                <div className={classes.banner}>
                    <h1 className="px-5 text-white">luxurious rooms</h1>
                    <p className="text-white">delux rooms starting at $299</p>
                    <NavLink className="btn btn-primary" to={(users && users.role === "admin") ? "/myrooms" : "/rooms"}>{(users && users.role === "admin") ? "My Rooms" : "Rooms"}</NavLink>
                </div>
            </header>
        </div>
    )
}

export default LandingPage;