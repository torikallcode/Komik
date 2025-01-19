import { Crown } from 'lucide-react';
import { useState } from 'react';

const CrownedButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative">
      <div className="absolute text-yellow-500 -top-8 right-5">
        <Crown fill="currentColor" className="w-8 h-8" />
      </div>
      <button
        onClick={() => setShowModal(true)}
        className="fixed px-5 py-5 text-white bg-green-500 rounded-full hover:bg-green-600 bottom-5 right-5"
      >
        <h1 className='text-sm leading-tight font-comic'>Read <br /> Now</h1>
      </button>
    </div>
  );
};

export default CrownedButton;