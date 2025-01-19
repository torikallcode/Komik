import React from 'react'

export const CardChose = ({ className, title, likes, url, titleClassName, likesClassName }) => {
  return (
    <div href="#" className={`relative block group bg-white aspect-[1/1] shadow-sm overflow-hidden cursor-pointer ${className}`}>
      <img
        alt=""
        src={url}
        className="absolute inset-0 object-cover w-full h-full transition-all duration-300 ease-in-out group-hover:opacity-50 group-hover:scale-110"
      />

      <div className="relative p-4">
        <div>
          <p className={`text-sm font-medium tracking-wide text-gray-800 sm:text-xl lg:text-base font-poppins ${titleClassName}`}>{title}</p>
          <p className={`text-base font-medium font-poppins sm:text-xl lg:text-base ${likesClassName}`}>♥ {likes}</p>
        </div>
      </div>
      {/* <p className="absolute text-sm font-semibold tracking-wide text-gray-800 bottom-4 sm:text-xs font-poppins left-4">{genre}</p> */}
    </div>
  )
}
