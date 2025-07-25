import React, { useState, useEffect } from 'react'
import "./index.css"
import Searchbar from './components/Searchbar'
import QuickNav from './components/QuickNav'
import Images from './components/Images'

const App = () => {

  const [query, setQuery] = useState("mountain");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }
    const accessKey = import.meta.env.VITE_UNSPLASH_KEY;
    const page = 1;
    const perPage = 20;
    const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const resizedArray = data.results.map(photo => `${photo.urls.raw}&w=200&h=200&fit=crop`);
        setPhotos(resizedArray);
      })
      .catch(err => console.error(err));
  }
    , [query])

  console.log(photos)


  return (
    <>
      <header>
        <h1 className=' font-heading text-5xl md:text-6xl text-center mt-12 md:mt-16'>SnapShot</h1>
      </header>

      <Searchbar setQuery={setQuery} />
      <QuickNav setQuery={setQuery} />
      <Images photos={photos} />

    </>

  )
}

export default App
