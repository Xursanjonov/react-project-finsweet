import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosUrl } from '../../config'

const CategoryDetails = () => {
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        axiosUrl.get(`products/${id}`).then(res => setProduct(res.data))
    }, [])

    return (
        <div className="w-full h-[90vh] mx-auto flex items-center justify-center gap-8 bg-white">
            <div className="w-[150px] h-[500px] flex flex-col items-center justify-between">
                <img className='w-[110px] h-[110px] object-contain shadow-md p-2 border-[1px] rounded-lg' src={product?.images[0]} alt="" />
                <img className='w-[110px] h-[110px] object-contain shadow-md p-2 border-[1px] rounded-lg' src={product?.images[0]} alt="" />
                <img className='w-[110px] h-[110px] object-contain shadow-md p-2 border-[1px] rounded-lg' src={product?.images[0]} alt="" />
                <img className='w-[110px] h-[110px] object-contain shadow-md p-2 border-[1px] rounded-lg' src={product?.images[0]} alt="" />
            </div>
            <div className="w-[500px] h-[500px] p-2 rounded-lg flex items-center justify-center shadow-md border-2">
                <img className='' src={product?.images[0]} alt="" />
            </div>
            <div className="w-[500px] flex flex-col items-start justify-center gap-4">
                <h1 className='text-2xl font-bold text-black'>{product?.title}</h1>
                <h4 className='text-lg font-semibold text-red-500'>${product?.price}.00</h4>
                <h5 className='font-medium text-gray-500'>{product?.description}</h5>
                <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptates cumque itaque amet, nulla corrupti voluptas neque veniam vel ex explicabo commodi sint ea laborum similique tenetur iure tempore quae illum minus nam debitis at! Ad incidunt debitis cupiditate excepturi quia dolor aspernatur amet, consequuntur beatae cumque aut aliquid error!</p>
            </div>
        </div>
    )
}

export default CategoryDetails