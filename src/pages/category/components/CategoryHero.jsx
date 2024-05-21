import React from 'react'

const blog = 'Blog > Business'

const CategoryHero = () => {
    return (
        <div className='w-full h-[312px] flex flex-col items-center justify-center gap-4 bg-[lavender]'>
            <h1 className='text-3xl font-bold text-black'>Business</h1>
            <p className='w-[500px] text-center text-gray-500'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
            <h5 className='text-xl font-medium text-black'>{blog}</h5>
        </div>
    )
}

export default CategoryHero