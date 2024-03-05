import { SidebarElement } from "./SidebarElement";
import "./sidebar.css"
import { ReactNode, useEffect, useState } from "react";

import main_icon from './icons/main.png'
import consumptionIcon from './icons/consumption.png'
import chargingIcon from './icons/charging.png'
import logoutIcon from './icons/logout.png'
import ticket_icon from './icons/ticket.png'
import profile_icon from './icons/user.png'
import { useDispatch, useSelector } from "react-redux";
import { Button } from "primereact/button";
import menu_icon from "../../images/icons/menu.png"
import { setIsOpen } from "../../components/Sidebar/sideBarSlice";
import { AppDispatch } from "../../store";
import { classNames } from "primereact/utils";
export const Sidebar = () => {

    // const { user_id, current_permissions } = useSelector((state: any) => state.auth)
    // const [isOpen, setIsOpen] = useState(false);
    const { isOpen } = useSelector((state: any) => state.sideBar)
    const { current_user_name } = useSelector((state: any) => state.auth)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        console.log('isopen fdsf', isOpen)
    }, [isOpen])
    const handleClick = (event: any) => {
        dispatch(setIsOpen(!isOpen));
        event.target.setAttribute('data-opened', 'true');
    }
    const nav_content = [
        {
            group_title: '',
            elements: [
                {
                    title: 'Kezdőlap',
                    icon: main_icon,
                    redirect_to: '/'
                },
                {
                    title: 'Fogyasztás',
                    icon: consumptionIcon,
                    redirect_to: '/consumption'
                },
                {
                    title: 'Töltés kezelés',
                    icon: chargingIcon,
                    redirect_to: '/switch'
                },
                {
                    title: 'Kijelentkezés',
                    icon: logoutIcon,
                    redirect_to: '/logout'
                }
            ]
        },
        // {
        //     group_title: 'Admin mód',
        //     elements: [
        //         {
        //             title: 'Szerepkörök',
        //             icon: role_icon,
        //             redirect_to: '/szerepkorok',
        //             permission: 'szerepkorok_kezelese'
        //         },
        //         {
        //             title: 'Automatizációk',
        //             icon: automation_icon,
        //             redirect_to: '/automatizaciok',
        //             permission: 'automatizacio_kezelese'
        //         }
        //     ]
        // },
        // {
        //     group_title: 'Műszaki részleg',
        //     elements: [
        //         // {
        //         //     title: 'Hibajegyek (régi)',
        //         //     icon: ticket_icon,
        //         //     redirect_to: '/hibajegyek_regi',
        //         //     //permission: 'hibajegy'
        //         // },
        //         {
        //             title: 'Hibajegyek',
        //             icon: ticket_icon,
        //             redirect_to: '/hibajegyek',
        //             //permission: 'hibajegy'
        //         }
        //     ]
        // }
    ]

    const [innerHTML, set_innerHTML] = useState(null)

    useEffect(() => {

        elementsToHTML()

    }, [])//current_permissions

    const elementsToHTML = () => {

        // if (!current_permissions || current_permissions.length < 1)
        //     return

        let elements = []

        for (let group of nav_content) {
            let group_visible_elements = []

            for (let element of group.elements) {
                // if (!element['permission'] || current_permissions.includes(element['permission']))
                group_visible_elements.push(element)
            }

            if (group_visible_elements.length > 0 && group.group_title !== '')
                elements.push({ title: group.group_title })

            for (let visible of group_visible_elements) {
                elements.push(visible)
            }
        }

        set_innerHTML(elements.map((n_e, index) => {
            return (
                <SidebarElement key={index} {...n_e} handleClick={() => dispatch(setIsOpen(false))} />
            )
        }))
    }

    const renderSideBar = () => {
        return <div id={`vksz_sidebar`} className={`${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className="sidebar_content">

                <div className="sidebar_logo">
                    <div className="username">
                        {current_user_name}
                    </div>
                    <div className="sidebar-picture">
                        {/* logo here */}
                    </div>
                </div>
                <div className={`sidebar_element_holder `}>
                    {innerHTML}
                </div>
            </div>


        </div>

    }

    return (
        <>
            {/* <button onClick={handleClick} id="navbar_toggle"></button> */}
            <Button
                id="navbar_toggle"
                style={{}}
                label={''}
                icon={<img src={menu_icon} alt='button icon' style={{ height: '20px' }} />}
                aria-label="Search"
                onClick={handleClick}
            />
            {isOpen ? <div className="my-canvas"></div> : null}
            {renderSideBar()}
        </>

    );
};