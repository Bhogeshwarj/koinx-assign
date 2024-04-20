
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

const Infolayout = () => {
    const activeStyles = {
        fontWeight: "bold",
        color: "#0070f3",
        borderBottom: "2px solid ", // Add bottom border for active NavLink
    };

    return (
        <>
        <div>
            <nav className='info-nav mt-5 flex gap-8'>
                <NavLink
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Overview
                </NavLink>

                <NavLink
                    to="fundamentals"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Fundamentals
                </NavLink>

                <NavLink
                    to="team"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Team
                </NavLink>
            
                <NavLink
                    to="tokenomics"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Tokenomics
                </NavLink>
                <NavLink
                    to="news"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    News
                </NavLink>
                <NavLink
                    to="technicals"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Technical
                </NavLink>
                </nav>
            <hr className='h-1 text-gray-400 mb-5'/>
            <Outlet />
            </div>
           
        </>
    );
};

export default Infolayout;
