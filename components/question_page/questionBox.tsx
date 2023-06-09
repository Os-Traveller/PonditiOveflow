'use client';

import { HiPencilAlt } from 'react-icons/hi';

export function QuestionBox() {
  return (
    <section className='border-b border-gray-300 px-5 pt-5 pb-3'>
      <h1 className='font-semibold mb-1'>Need Money</h1>
      <p>
        <span className='text-gray-500 font-semibold'>
          No Answer Yet &nbsp; &nbsp;
        </span>
        <span className='text-gray-400'> - June 10 at 2023</span>
      </p>
      <div className='my-2 center-y gap-5 text-gray-500'>
        <HiPencilAlt size={20} />
        <p>Answer</p>
      </div>
      <p className='mt-2 block'>
        Topic : <span className='font-bold'>#meme #programming</span>
      </p>
    </section>
  );
}
