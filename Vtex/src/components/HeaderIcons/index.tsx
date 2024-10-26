import { FaRegUserCircle, FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import React from "react";
export const HeaderIcons = () => {
    const icons = [
        {
            icon: <FaRegUserCircle />,
            size: 20
        },
        {
            icon: <FaRegHeart />,
            size: 20
        },
        {
            icon: <BsCart3 />,
            size: 20
        },
        {
            icon: <MdOutlineShoppingBag />,
            size: 20
        }
    ]
    return (
        <div>
            <ul className="flex items-center gap-8 text-text-color-secondary">
                {icons.map((icon, index) => (
                    <li key={index}>
                        <a href="#">
                            {React.cloneElement(icon.icon, { size: icon.size })}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}