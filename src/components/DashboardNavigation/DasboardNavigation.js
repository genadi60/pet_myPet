import { NavLink } from 'react-router-dom';

const DashboardNavigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/pets/all">All</NavLink></li>
                <li><NavLink to="/pets/Cat">Cats</NavLink></li>
                <li><NavLink to="/pets/Dog">Dogs</NavLink></li>
                <li><NavLink to="/pets/Parrot">Parrots</NavLink></li>
                <li><NavLink to="/pets/Reptile">Reptiles</NavLink></li>
                <li><NavLink to="/pets/Other">Other</NavLink></li>
            </ul>

            <style jsx="true">{`
                .active {
                    background-color: lightgreen !important
                }
            `}
            </style>
        </nav>
        
    );
};

export default DashboardNavigation;