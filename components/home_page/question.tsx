import { MdOutlineLiveHelp } from 'react-icons/md';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { user } from '@/fake_data/user';
import { ProfileIcon } from '../navbar/profileIcon';
import { Card } from '../shared/card';

export function Question() {
  const buttonStyle = `w-full center-y gap-2 py-1 justify-center text-lg rounded-md hover:bg-gray-300 animation`;
  return (
    <Card>
      <div>
        <div className='padding center-y gap-5'>
          <div>
            <ProfileIcon userName={user.userName} img={user.img} size='50px' />
          </div>
          <div className='w-full rounded-full px-5 py-3 border text-gray-500'>
            What do you want to ask?
          </div>
        </div>
        <hr />
        <div className='px-8 center-y py-2'>
          <button className={buttonStyle}>
            <MdOutlineLiveHelp size={20} /> Ask
          </button>
          <button className={buttonStyle}>
            <HiOutlinePencilAlt size={20} /> Answer
          </button>
        </div>
      </div>
    </Card>
  );
}
