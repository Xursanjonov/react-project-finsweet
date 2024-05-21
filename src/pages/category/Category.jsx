import React from 'react'
import useFetch from '../../hooks/useFetch'
import CategoryHero from './components/CategoryHero'
import CategoryItem from './components/CategoryItem'

const Category = () => {
    const { data, loading } = useFetch(`/products?limit=4`)

    return (
        <div className="w-full mx-auto pb-14 bg-white">
            <CategoryHero />
            <div className="w-[1280px] mx-auto">
                <label className="w-full mx-auto">
                    <input className="input input-info my-12 w-[1280px] h-[66px] font-semibold text-black bg-white" type="search" placeholder="Search..." />
                </label>
                <div className="w-[1280px] mx-auto flex flex-col items-center justify-center gap-8">
                    {
                        loading ? <h1 className='text-4xl font-extrabold text-black'>Lodaing...</h1> :
                            data?.map(category => <CategoryItem data={category} key={category.id} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Category