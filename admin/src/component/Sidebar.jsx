import React from 'react'
import { NavLink } from 'react-router-dom'
import { CirclePlus, PackageSearch, ClipboardList } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-6 text-sm'>
        
        <NavLink 
          to={"/add"} 
          className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l hover:bg-gray-100 '
        >
          <CirclePlus className='w-5 h-5' />
          <p className='hidden md:block'>Add Items</p>
        </NavLink>

        <NavLink 
          to={"/list"} 
          className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l hover:bg-gray-100 '
        >
          <ClipboardList className='w-5 h-5' />
          <p className='hidden md:block'>List Items</p>
        </NavLink>

        <NavLink 
          to={"/orders"} 
          className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l hover:bg-gray-100 '
        >
          <PackageSearch className='w-5 h-5' />
          <p className='hidden md:block'>Orders</p>
        </NavLink>
      
      </div>
    </div>
  )
}

export default Sidebar;
