import React from 'react';
import EditCard from '../component/editCard';

const Card = ({ Uprofile, Uuser, position }) => {
    return (
        <div className='flex gap-2 items-center justify-center p-4 shadow-lg rounded-sm bg-gray-800 text-white'>
            <div>
                <img className='w-[100px] h-[100px] object-cover rounded-full' src={Uprofile} alt="" />
            </div>
            <div className="p-4">
                <p className="text-1xl">{ Uuser }</p>
                <p className="text-base text-gray-500 mt-4">Software Eng</p>
                <EditCard positions={position} user={Uuser}/>
            </div>
        </div>
    );
}

export default Card;
