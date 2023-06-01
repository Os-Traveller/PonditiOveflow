import { GrSearch } from 'react-icons/gr';

export function Search() {
  return (
    <div className='center-y border border-gray-300 px-4 py-2 rounded-lg gap-3'>
      <GrSearch size={20} />
      <input
        className='w-full outline-none'
        type='text'
        placeholder='Search anything here ...'
      />
    </div>
  );
}
