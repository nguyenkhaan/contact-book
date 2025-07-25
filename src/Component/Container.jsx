import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
function Container({children})
{
    return (
        <div className='mt-6 grid-rows-2 grid gap-x-9 gap-y-6 grid-cols-3 w-full min-h-80'>
            <Card name="Alice Johnson" address="New York" /> 
            <Card name="Alice Johnson" address="New York" /> 
            <Card name="Alice Johnson" address="New York" /> 
            <Card name="Alice Johnson" address="New York" /> 
            <Card name="Alice Johnson" address="New York" /> 
        </div>
    )
}
export default Container