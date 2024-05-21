import React from 'react'
import blogimg from '../../assets/images/blog-hero.png'
import blogimg2 from '../../assets/images/jonson.svg'

const Blog = () => {
    return (
        <div className="w-[1519px] py-10 bg-white">
            <div className="w-[1280px] flex flex-col items-center mx-auto">
                <figure className="w-[1280px]"> <img className='w-[1280px]' src={blogimg} alt="" /> </figure>
                <div className="w-[800px] mt-10 flex flex-col justify-center gap-5">
                    <div className="flex items-center justify-start gap-4">
                        <figure> <img src={blogimg2} alt="" /> </figure>
                        <div>
                            <h3 className='font-semibold text-purple-500'>Andrew Jonson</h3>
                            <h5>Posted on 27th January 2022</h5>
                        </div>
                    </div>
                    <h1 className='my-4 text-[2.6rem] font-bold text-black'>Step-by-step guide to choosing great font pairs</h1>
                    <h4 className='mb-7 text-2xl font-semibold text-black'>Startup (#business, #screen, #life)</h4>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                    </p>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blog