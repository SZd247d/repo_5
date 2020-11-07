import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <form onSubmit={onSubmit} className='w-full max-w-sm my-10 mx-auto'>
      <div className='flex items-center border-b border-teal-500 py-2'>
        <input
          className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
          type='text'
          placeholder='Search Image Term...'
          aria-label='Full name'
          onChange={e => setText(e.target.value)}
        />
        <button
          className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
          type='submit'>
          Search
        </button>
      </div>
    </form>
  );
};

export default ImageSearch;
