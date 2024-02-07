import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <ul>
            <li>
                <NavLink to="/">
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to="/projects">
                    PROJECTS
                </NavLink>
            </li>
        </ul>
    )
}

export default Navbar;