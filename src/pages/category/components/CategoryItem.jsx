import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../assets/images/category-img.png'

const CategoryItem = ({ data }) => {

    return (
        <div className='w-[1280px] mx-auto flex items-start justify-start gap-10'>
            <Link to={`/category/${data.id}`} className='w-[447.65px] h-[312px]'>
                <img className='w-[447.65px] h-[312px]' src={img} alt={data.title} />
            </Link>
            <div className='w-[700px] flex flex-col items-start gap-10'>
                <h4 className='text-xl font-bold text-purple-500'>{data.title}</h4>
                <h2 className='text-4xl font-bold text-black'>Top 6 free website mockup tools 2022</h2>
                <p>{data.description} <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta saepe veniam blanditiis omnis, nulla suscipit porro incidunt deleniti delectus labore maxime harum voluptatibus aspernatur esse? Natus porro amet assumenda nihil.</p>
            </div>
        </div>
    )
}

export default CategoryItem