import React from 'react'

const Header = ({ title }: { title: string }) => {
    return (
        <div className='w-full flex items-center justify-center font-bold'>
            <h1 className='text-[30px]'>{title}</h1>
        </div>
    )
}

export default Header
