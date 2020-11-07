import React from 'react';

const ImageCard = ({ img }) => {
  const tags = img.tags.split(',');

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg max-h-32'>
      <img src={img.webformatURL} alt='' className='w-full' />
      <div className='px-6 py-4'>
        <div className='font-bold text-teal-500 tetx-xl mb-2'>
          Photo By {img.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {img.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {img.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {img.likes}
          </li>
        </ul>
      </div>
      <div className='px-6 py-4'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className='inline-block bg-gray-300 text-gray-600 text-sm px-3 py-1 rounded-full mr-2 font-semibold'>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
