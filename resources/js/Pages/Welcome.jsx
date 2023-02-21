import Header from '../Components/header';
import React from 'react';
// import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome() {
    return (
        <>
        <Header/>
           
           <main className="flex justify-between w-full bg-[#FDFDFD] mt-5 px-[3rem]">
            <div className="left_side w-[219px] bg-[#fff] shadow-lg overflow-hidden shadow-[#CFCFCF] rounded-lg gap-3 flex flex-col ">
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
            <div className="content bg-indigo-500 w-[680px] ">r
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio sit consequatur omnis dolorum minus, vel deserunt sed quo laborum numquam porro explicabo mollitia suscipit.</p>
            </div>


            <div className="right_side w-[260px] ">
                <div className="story_event shadow-lg overflow-hidden shadow-[#CFCFCF] rounded-lg">
                    
                    <div className="story p-4">
                    <header className='text-grey-500 uppercase flex justify-between items-center font-bold'>
                        <h3>stories</h3>
                        <span>dot</span>
                    </header>
                    <div className="story_list flex flex-row items-center justify-center my-5 gap-2">
                        <div className='bg-[#90A877] w-150 h-100 p-3 text-center rounded-full'>
                        <span className='text-white'>+</span>
                        </div>

                        <div className='bg-[#90A877] w-150 h-100 p-3 text-center rounded-full'>
                            <span className='text-white'>1</span>
                        </div>

                        <div className='bg-[#90A877] w-150 h-100 p-3 text-center rounded-full'>
                        <span className='text-white'>2</span>
                        </div>

                        <div className='bg-[#90A877] w-150 h-100 p-3 text-center rounded-full'>
                        <span className='text-white'>3</span>
                        </div>

                        <div className='bg-[#90A877] w-150 h-100 p-3 text-center rounded-full'>
                        <span className='text-white'>4</span>
                        </div>
                        
                    </div>
                    
                </div>
                <hr />
                    <div className="event flex flex-col p-4">
                    <header className='text-grey-300 uppercase  font-semibold'>
                        <h3>Envents</h3>
                    </header>

                    <span className='text-dark'>2 Event Invites</span>
                    <span className='text-dark'>Today Maria Illescas's birthday</span>
                    </div>

                </div>

                <div className="online mt-5">
                    <div className="container flex flex-col gap-2 justify-end items-end">
                    <div className='bg-[#90A877] relative w-150 h-100 p-3 text-center rounded-full'>
                            <span className='text-white absolute top-0 left-5 bg-gray-900 p-1 rounded-full'></span>
                            <span>1</span>
                        </div>

                        <div className='bg-[#90A877] relative w-150 h-100 p-3 text-center rounded-full'>
                        <span className='text-white absolute top-0 left-5 bg-gray-900 p-1 rounded-full'></span>

                        <span className='text-white'>2</span>
                        </div>

                        <div className='bg-[#90A877] relative w-150 h-100 p-3 text-center rounded-full'>
                        <span className='text-white absolute top-0 left-5 bg-gray-900 p-1 rounded-full'></span>

                        <span className='text-white'>3</span>
                        </div>

                        <div className='bg-[#90A877] relative w-150 h-100 p-3 text-center rounded-full'>
                        <span className='text-white absolute top-0 left-5 bg-gray-900 p-1 rounded-full'></span>

                        <span className='text-white'>4</span>
                        </div>
                    </div>
                </div>
                
            </div>


           </main>
        </>
    );
}
