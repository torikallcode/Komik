import React from 'react'

export const Navbar = ({ classname }) => {
  return (
    <header className={` w-full bg-white border-b border-gray-300 ${classname}`}>
      <div className="flex items-center h-16 max-w-screen-xl gap-5 px-4 mx-auto lg:h-20 sm:px-6 lg:px-8">
        <a className="block text-primary" href="#">
          <img className="w-auto h-10 lg:h-14" src="/img/logokomik2.png" />
        </a>
        <div className="flex items-center justify-end flex-1 md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 font-poppins">
              <li>
                <a className="font-medium text-gray-900 transition hover:text-primary" href="#"> Original </a>
              </li>
              <li>
                <a className="font-medium text-gray-900 transition hover:text-primary" href="#"> Genre </a>
              </li>
              <li>
                <a className="font-medium text-gray-900 transition hover:text-primary" href="#"> Populer </a>
              </li>
              <li>
                <a className="font-medium text-gray-900 transition hover:text-primary" href="#"> Kanvas </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-end flex-1 gap-x-3">
          {/* <div className='flex items-center justify-center gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
              <path d="M19.8978 16H7.89778C6.96781 16 6.50282 16 6.12132 16.1022C5.08604 16.3796 4.2774 17.1883 4 18.2235" stroke="#1C274D" stroke-width="1.5" />
              <path d="M8 7H16" stroke="#1C274D" stroke-width="1.5" stroke-linecap="round" />
              <path d="M8 10.5H13" stroke="#1C274D" stroke-width="1.5" stroke-linecap="round" />
              <path d="M13 16V19.5309C13 19.8065 13 19.9443 12.9051 20C12.8103 20.0557 12.6806 19.9941 12.4211 19.8708L11.1789 19.2808C11.0911 19.2391 11.0472 19.2182 11 19.2182C10.9528 19.2182 10.9089 19.2391 10.8211 19.2808L9.57889 19.8708C9.31943 19.9941 9.18971 20.0557 9.09485 20C9 19.9443 9 19.8065 9 19.5309V16.45" stroke="#1C274D" stroke-width="1.5" stroke-linecap="round" />
              <path d="M10 22C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14C16.8284 2 18.2426 2 19.1213 2.87868C20 3.75736 20 5.17157 20 8M14 22C16.8284 22 18.2426 22 19.1213 21.1213C20 20.2426 20 18.8284 20 16V12" stroke="#1C274D" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <h1 className='text-base font-medium font-poppins'>Creator</h1>
          </div> */}
          <div className='flex items-center justify-center gap-x-2'>
            <button className='px-4 py-1 font-medium text-gray-500 border border-gray-400 rounded-full font-poppins'>
              Terbitkan
            </button>
            <button className='px-6 py-1 font-medium text-white bg-gray-800 rounded-full font-poppins'>
              Masuk
            </button>
            <div className='flex items-center justify-center p-2 border border-gray-400 rounded-full'>
              <svg fill='none' xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24">
                <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
