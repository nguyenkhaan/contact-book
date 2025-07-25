import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
function Container({children})
{
    return (
        <div className='mt-6 grid-rows-2 grid gap-x-9 gap-y-6 grid-cols-3 w-full min-h-80'>
            {children.map(
                (data) => {
                    return <Card name = {data.name} address = {data.address} key={data.id} /> 
                }
            )}
        </div>
    )
}
export default Container