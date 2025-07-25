import React from 'react'


const Images = (props) => {

    return (
        <section className='mt-10 sm:mt-20 mx-4 sm:mx-8 md:max-w-3xl md:mx-auto lg:mx-auto lg:max-w-5xl h-screen '>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4 md:px-8 place-items-center gap-4' >
                {
                    props.photos.map((photo, id) => (
                        <img src={photo} alt="photo" key={id} className=' rounded-lg hover:scale-[1.05] hover:transition-all hover:duration-150' />
                    ))
                }

            </div>
        </section>
    )
}

export default Images
