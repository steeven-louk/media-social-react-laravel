import React from 'react'

const Header = () => {
  return (
    <>
        <div className="bg-[#90A877] w-full ">
        <div className="header-container items-center flex justify-between p-4 px-[3rem]">
            <span className="navbar-brand">brands</span>
            <div className="input-container bg-[#7A925E] w-2/6">   
                <input type="text" placeholder='Search...' className="w-full focus:outline-none" />
    
            </div>

            <div className="left_nav text-[#F4F7F2] flex gap-6">
                <span>6</span>
                <span>5</span>
                <span>6</span>
                <span>4</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header;