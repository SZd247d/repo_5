import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className='md:flex flex-column items-center relative'>
      <div className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-center text-white py-1 px-2 rounded flex-10 order-2'>
        <a
          href='https://github.com/zakisellali/repo_5'
          target='_blank'
          rel='noreferrer'>
          View Code On Github
        </a>
      </div>
      <form
        onSubmit={onSubmit}
        className=' max-w-sm my-10 mx-auto flex-1 order-1'>
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
    </div>
  );
};

export default ImageSearch;
