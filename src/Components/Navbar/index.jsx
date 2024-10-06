import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../Context";


function Navbar(){

        const {searchPara, setSearchPara, handleSubmit}= useContext(GlobalContext);
        console.log(searchPara);
        
    return (
       <nav className="flex justify-between items-center py-8 container mx auto flex-col lg:flex-row gap-5 lg:gap-0">
            <h1 className="text-2xl font-semibold text-2xl py">
            <NavLink to={'/'} >Food Recipe</NavLink>
            </h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="search"
                value={searchPara}
                onChange={(event)=>{setSearchPara(event.target.value)}}
                className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200 "
                placeholder="Enter food name"/>
                </form>
            <ul className="flex gap-5">
                <li>
                    <NavLink to={'/'} className='text-balck hover:text-gray-700 duration-300'>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/favorite'} className='text-balck hover:text-gray-700 duration-300'>favorites</NavLink>
                </li>

            </ul>
            
       </nav>
    )
}


export default Navbar;