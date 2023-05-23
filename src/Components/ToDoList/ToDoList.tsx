import React from 'react'
import Header from './Header'

const ToDoList = () => {
    return (
        <div className='h-[70%] w-[30%] bg-white rounded-xl shadow-2xl p-5'>
            <Header title='Reminder' sizeText='30'></Header>
        </div>
    )
}

export default ToDoList
