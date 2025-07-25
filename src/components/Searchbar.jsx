import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

const Searchbar = (props) => {
    const [inputValue, setInputValue] = useState("");

    function handleSubmit() {
        if (inputValue.trim() === "") {
            alert("Please enter something")
            return;
        }
        props.setQuery(inputValue)
    }

    return (
        <section className='mt-12 h-auto max-w-xl md:max-w-2xl  flex gap-0 items-center mx-12 md:mx-auto'>
            <input type="text" className='h-10 rounded-full border border-gray-800 w-[85%] border-r-0 rounded-r-none focus:outline-none
            focus:ring-2 focus:ring-blue-500 focus:border-none pl-4 ' onChange={(e) => setInputValue(e.target.value)} placeholder='Search' />

            <button className='w-[15%] h-10 flex items-center justify-center bg-green-400/90 hover:bg-green-500 hover:transition-all  hover:scale-[1.08] cursor-pointer' onClick={handleSubmit}>
                <FaArrowRight style={{ height: "30px", width: "30px", color: "white" }} />
            </button>

        </section>

    )
}

export default Searchbar
