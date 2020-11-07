import React, { useEffect, useState } from 'react';
import './assets/main.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&category=computer&per_page=200`
        );
        const data = await res.json();
        setImage(data.hits);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImages();
  }, [term]);

  return (
    <div className='container mx-auto'>
      <ImageSearch searchText={text => setTerm(text)} />
      {!loading && image.length === 0 && (
        <h1 className='text-5xl text-center text-gray-700 mx-auto mt-32'>
          No Image Found
        </h1>
      )}
      {loading ? (
        <h1 className='text-6xl text-center text-gray-700 mx-auto mt-32'>
          Loading...
        </h1>
      ) : (
        <div className='grid grid-cols-3 gap-4'>
          {image.map(img => (
            <ImageCard key={img.id} img={img} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
