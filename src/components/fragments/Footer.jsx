import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full py-8 bg-white border-t border-gray-200">
      <div className="container max-w-5xl px-4 mx-auto">
        {/* Top Section with Links */}
        <div className="grid grid-cols-2 gap-6 pb-5 md:grid-cols-4">
          {/* Company Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-sm font-bold text-gray-800">WEBTOON</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">About</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Press</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-sm font-bold text-gray-800">SUPPORT</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Creator Contact</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-sm font-bold text-gray-800">COMMUNITY</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Creators</a></li>
              <li><a href="#" className="hover:text-blue-600">Contests</a></li>
              <li><a href="#" className="hover:text-blue-600">Fanarts</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="text-sm font-bold text-gray-800">FOLLOW US</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1 1.25 1.25 1.25 1.25 0 0 1-1.25-1.25M12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 text-center border-t border-gray-200">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} WEBTOON. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center mt-2 space-x-4 text-xs text-gray-500">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-blue-600">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};