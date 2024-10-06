import { AlignJustify, X } from 'lucide-react';
import { useState } from "react";
import { Link } from 'react-router-dom';



const MyDropdownMenu = ({homeColor, aboutColor, skillsColor, eduColor, projColor}) => {

    //Menu items visibility
    const [showItems, setShowItems] = useState(false);

    const toggleMenuItemsVisibility = () => {
        setShowItems(!showItems);
    };

    const burgerDisplayState = showItems ? 'none' : 'block';
    const XdisplayState = showItems ? 'block' : 'none';
    const menuDisplayState = showItems ? 'flex' : 'none';
    const buttonColor = showItems ? 'red' : 'blue';



    return (

        <div className='max-w-fit flex flex-col items-end'>

            <button
                type="button"
                style={{ color: `${buttonColor}` }}
                onClick={toggleMenuItemsVisibility}
            >

                <AlignJustify style={{ display: `${burgerDisplayState}` }} />

                <X size={30} style={{ display: `${XdisplayState}` }} />

            </button>


            <div className="max-w-fit bg-white rounded-lg shadow-xl flex-col px-4 py-2 gap-2" style={{ display: `${menuDisplayState}` }}>

                <Link style={{color: `${homeColor}`}} to={"/"}>Home</Link>
                <Link style={{color: `${aboutColor}`}} to={"/about"}>About</Link>
                <Link style={{color: `${skillsColor}`}} to={"/skills"}>Skills</Link>
                <Link style={{color: `${eduColor}`}} to={"/education"}>Education</Link>
                <Link style={{color: `${projColor}`}} to={"/projects"}>Projects</Link>

            </div>

        </div>

    );

};

export default MyDropdownMenu;