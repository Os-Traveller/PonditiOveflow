import { ProfileIcon } from '@/components/navbar/profileIcon';
import { TbDots } from 'react-icons/tb';

interface FeedHeaderProps {
  userImage: string;
  userName: string;
}

export function FeedHeader({ userImage, userName }: FeedHeaderProps) {
  return (
    <header className='flex gap-5 px-5'>
      <ProfileIcon img={userImage} size='50px' />
      <div>
        <div className='center-y gap-3 text-blue-900 text-lg font-semibold'>
          <h2>{userName}</h2>
          <span className='text-sm text-blue-400'>Follow</span>
        </div>
        <p className='text-gray-500 text-sm'>June 02 at 2023</p>
      </div>
      <div className='ml-auto'>
        <button className='py-1 px-4 border rounded-lg'>
          <TbDots size={20} />
        </button>
      </div>
    </header>
  );
}
