import { BiUpvote, BiDownvote, BiComment, BiShare } from 'react-icons/bi';

export function FeedFooter() {
  function classGenerator(state: boolean): string {
    return ':';
  }
  return (
    <footer className='py-3'>
      <div className='flex gap-3 px-5 items-center justify-evenly'>
        {/* up vote */}
        <p
          className={`flex items-center gap-1 rounded-full px-5 py-2 ${
            false ? '' : 'bg-gray-200'
          }`}
        >
          <BiUpvote /> | 20
        </p>
        {/* down vote */}
        <p
          className={`flex items-center gap-1 rounded-full px-5 py-2 ${
            false ? '' : 'bg-gray-200'
          }`}
        >
          <BiComment /> | 12
        </p>

        {/* comments */}
        <p
          className={`flex items-center gap-1 rounded-full px-5 py-2 ${
            false ? '' : 'bg-gray-200'
          }`}
        >
          <BiComment /> | 12
        </p>
        {/* share */}
        <p
          className={`flex items-center gap-1 rounded-full px-5 py-2 ${
            false ? '' : 'bg-gray-200'
          }`}
        >
          <BiShare /> | 12
        </p>
      </div>
    </footer>
  );
}
