import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-900 text-blue-100 flex justify-around items-center  px-5 h-20'>
        <div className="logo font-bold text-4xl" >
            <span className='text-orange-300'> &lt;</span>
             
            Pass
            <span className='text-orange-300'>OP/&gt; </span>
            
            
            
            </div>


    
        <button  className="text-center my-5 mx-5 bg-transparent">
          <img src=" icons/githubpic2.jpg" className="invert p-6 w-24 py-2 rounded-full bg-transparent" alt="" />
              Github
        </button>


      
    </nav>
  )
}

export default Navbar;
