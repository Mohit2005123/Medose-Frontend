import React from 'react';

const Post = ({ title, date, content, imageUrl }) => (
  <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md">
    <img src={imageUrl} alt={title} className="rounded-lg mb-4" />
    <h2 className="text-xl mb-2">{title}</h2>
    <p className="text-gray-400 mb-4">{date}</p>
    <p>{content}</p>
  </div>
);

export default Post;
