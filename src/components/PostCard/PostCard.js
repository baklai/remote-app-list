import React from 'react';

function PostCard({ image, title, comment, onclick }) {
  return (
    <div
      className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
      onClick={() => {
        onclick(title);
      }}
    >
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg hover:shadow-gray-500 transition-transform">
        <button className="flex flex-wrap no-underline hover:no-underline relative">
          <img alt="" src={image} className="h-48 rounded-t pb-6" />
          <div className="w-full font-bold text-xl text-gray-900 px-6 tracking-wide">
            {title}
          </div>
          <p className="text-gray-800 font-serif text-base px-6 mb-5">
            {comment}
          </p>
        </button>
      </div>
    </div>
  );
}

export default PostCard;
