import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='bg-[#5c5c5c] md:sticky z-auto top-0'>
        <div className='max-w-[1200]  p-5 flex justify-between items-center '>
           
            
                <ul className='hidden md:flex gap-5 text-white '>
                   <li>
                      <Link to="/Home">Home</Link>
                   </li>
                   <li>
                      <Link to="/About">About</Link>
                   </li>
                   <li>
                      <Link to="/Products">Products</Link>
                   </li>
                </ul>

                {/* Responsive */}
                {
              toggle ?
              <AiOutlineClose onClick={()=>setToggle(!toggle)} className= 'text-white text-2xl md:hidden block'/>
                :
              <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
            }

                <ul className = {` md:hidden text-white bg-[#5c5c5c]  top-[76px] w-full z-0 ${toggle ? 'left-[0]' : 'hidden'}
                `}> 
                    <li className='p-3'> Home </li>
                    <li className='p-3'> About </li>
                    <li className='p-3'> Products </li>
                </ul>

        </div>
    </div>
  )
}
