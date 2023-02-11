import React from 'react';
import Mesh from '../../Assets/mesh.webp';
import Tachyon from '../../Assets/tachyon.webp';
import ProtocolLabs from '../../Assets/protocol_labs.webp';

const Testo = () => {
  return (
    <div className='flex flex-col gap-10 items-center text-white py-20'>
      <h4 className='text-2xl font-bold'>Backed By the Giants</h4>
      <p className='text-lg text-center'>
        They are not just the backers, but believers of what we do, and how we
        aim to change the ecosystem and become the part of the change.
      </p>
      <div className='flex items-center justify-center gap-6 w-3/4'>
        <img src={Mesh} alt='Mesh' className='w-auto h-20' />
        <img src={Tachyon} alt='Tachyon' className='w-auto h-20' />
        <img src={ProtocolLabs} alt='ProtocolLabs' className='w-auto h-20' />
      </div>
    </div>
  );
};

export default Testo;
