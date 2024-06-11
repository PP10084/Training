import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, heading, subhead,component}) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full row-span-6">
    <div className='row-span-2 w-400 h-400'>
      <img className="" src={image} alt={heading} />
    </div>
    
    <div className="px-6 py-4 row-span-2">
      <div className="font-bold text-xl mb-2">{heading}</div>
      <p className="text-gray-700 text-base">{subhead}</p>
    </div>
    <div className="px-6 pt-4 pb-2 row-span-2">
      <button 

        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Read More
      </button>
    </div>
  </div>
);

export default BlogCard;
