import { NavLink } from 'react-router-dom';
import NavDropdown from "react-bootstrap/NavDropdown";

export default function FuntoNavbar() {
    return(
        <div className="navbar-nav navbar-nav-scroll my-2 my-lg-0"> 
        
        <NavLink to="/explore2">Explore</NavLink>

        <NavLink to="/collections">Collections</NavLink>

        <NavLink to="/live-bidding">Live Giveaways</NavLink>

        <NavLink to="/help-center">Help Center</NavLink>
        </div>
    )
}