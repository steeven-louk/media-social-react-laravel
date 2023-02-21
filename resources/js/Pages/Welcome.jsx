import Header from '../Components/header';
import React from 'react';
// import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome() {
    return (
        <>
        <Header/>
        <div className="bg-[#FDFDFD]">
            <h1 className='text-center'>premier test</h1>
        </div>
           
           <main className="flex justify-between px-[3rem]">
            <div className="left_side w-[219px] bg-indigo-300 rounded-lg gap-3 flex flex-col ">
                <div className="menu p-4">
                <header className='text-grey-500 uppercase font-bold'>menu</header>
               <ul className='flex flex-col capitalize mt-2 gap-3'>

                    <li className="text-[#90A877] cursor-pointer hover:text-[#000]">Home</li>
                    <li className="text-[#90A877] cursor-pointer hover:text-[#000]">Posts</li>
                    <li className="text-[#90A877] cursor-pointer hover:text-[#000]">messages</li>
                    <li className="text-[#90A877] cursor-pointer hover:text-[#000]">friends</li>
                    <li className="text-[#90A877] cursor-pointer hover:text-[#000]">events</li>
                    <li className="text-[#90A877] cursor-pointer hover:text-[#000]">video</li>
                    <li className="text-[#90A877] cursor-pointer hover:text-[#000]">photos</li>
                    <li className="text-[#90A877] cursor-pointer hover:text-[#000]">files</li>
                    <li className="text-[#90A877] cursor-pointer hover:text-[#000]">games</li>
               </ul>
                </div>
                <div className="favorite p-4">
                <header className='text-grey-500 uppercase font-bold'>your favorite groups</header>
               <ul className='flex flex-col capitalize mt-2 gap-3'>

                    <li className="text-[#90A877] cursor-pointer ">Time management</li>
                    <li className="text-[#90A877] cursor-pointer ">Freedom of soul</li>
                    <li className="text-[#90A877] cursor-pointer ">Audiobooks</li>
                    <li className="text-[#90A877] cursor-pointer ">Hand-craft. Make repairs with your own hands</li>
                    <li className="text-[#90A877] cursor-pointer ">Cooking at home</li>
                    <li className="text-[#90A877] cursor-pointer ">Farming</li>

               </ul>
                </div>
               <div className="relative border border-t-1 bottom-0">
                    <span className="ml-3 my-4">help ?</span>
               </div>
            </div>
            <div className="content bg-indigo-500 w-[760px] ">r
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio sit consequatur omnis dolorum minus, vel deserunt sed quo laborum numquam porro explicabo mollitia suscipit.</p>
            </div>
            <div className="right_side bg-gray-500 w-[219px]">
                
            </div>
           </main>
        </>
    );
}
