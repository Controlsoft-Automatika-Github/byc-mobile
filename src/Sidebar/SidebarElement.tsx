import { useEffect, useState } from 'react';
import "./sidebar.css"
import { Link, useLocation } from 'react-router-dom';

export const SidebarElement = ({
    redirect_to = '/',
    icon = undefined,
    title = '<placeholder_title>',
    handleClick
}) => {
    let location = useLocation();

    const [selected, set_selected] = useState(false)

    useEffect(() => {
        set_selected(location.pathname === redirect_to)
    }, [location])

    return (
        icon
            ?
            <Link onClick={handleClick} to={redirect_to} className={`sidebar_element ${selected ? 'current' : 'not_current'}`}>
                <img src={icon} className='icon' />
                <div className='sidebar_title vertical-center'>
                    <div>
                        {title}
                    </div>
                </div>
            </Link>
            :
            <div className={`sidebar_element`}>
                <div className='sidebar_title vertical-center' style={{ height: '100%' }}>
                    <div>
                        {title}
                    </div>
                </div>
            </div>
    );

};