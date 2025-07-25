import React from 'react'
import ReactDOM from 'react-dom'
function Input()
{
    return (
        <div className="flex justify-between p-0 mb-5">
            <div className = "rounded-sm w-fit p-4 py-4 bg-white gap-3 text-base flex items-center justify-evenly">
                <input className = "rounded-lg border-solid border-gray-300 w-60 px-2  border-2 m-0 bg-white p-2" type = "text" placeholder='Name:'></input>
                <input className = "rounded-lg border-solid border-gray-300  w-60 px-2 border-2 m-0 bg-white p-2" type="text" placeholder='City:'></input>
                <button className = "p-3 rounded-lg font-semibold text-white bg-blue-600 cursor-pointer">Add contact</button>
            </div>
            <div className='flex-1'></div>
        </div>
   
   
    )
}
export default Input