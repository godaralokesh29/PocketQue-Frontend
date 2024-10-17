import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-900 text-blue-100 flex justify-between items-center  px-5 h-20'>
        <div className="logo font-bold text-4xl" >
            <span className='text-orange-300'> &lt;</span>
             
            Pass
            <span className='text-orange-300'>OP/&gt; </span>
            
            
            
            </div>


        <ul >
            <li className='flex gap-5 '>
                <a href='#'className='flex gap-5 hover:font-bold' >Home</a>
                <a href='#' className='flex gap-5 hover:font-bold'>Contact</a>
                <a href='#' className='flex gap-5 hover:font-bold'>About</a>
            </li>
        </ul>

      
    </nav>
  )
}

export default Navbar;
