import React from 'react'

const QuickNav = (props) => {
    function handleClick(e) {
        props.setQuery(e.currentTarget.id);
    }
    return (
        <section className=' mt-8 md:mt-12 mx-8 sm:mx-auto flex flex-col sm:flex-row gap-4 sm:gap-2 md:gap-4  justify-center items-center'>

            <button id='mountain' onClick={handleClick} className='w-40 text-xl py-2 px-6 rounded-sm text-white bg-black/90 cursor-pointer'>Mountains</button>
            <button id='beach' onClick={handleClick} className='w-40 text-xl py-2 px-6 rounded-sm text-white bg-black/90 cursor-pointer'>Beaches</button>
            <button id='bird' onClick={handleClick} className='w-40 text-xl py-2 px-6 rounded-sm text-white bg-black/90 cursor-pointer'>Birds</button>
            <button id='food' onClick={handleClick} className='w-40 text-xl py-2 px-6 rounded-sm text-white bg-black/90 cursor-pointer'>Foods</button>

        </section>
    )
}

export default QuickNav

