import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to="React_Marvel">
                    <span>Marvel</span> information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink 
                    end
                    style={({isActive}) => ({ color: isActive ? "rgb(18, 2, 110)" : "black"})}
                    to="React_Marvel">Characters</NavLink></li>
                    /
                    <li><NavLink  
                    style={({isActive}) => ({ color: isActive ? "rgb(18, 2, 110)" : "black"})}
                    to="/comics">Comics</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;