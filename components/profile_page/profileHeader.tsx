import { user } from '@/fake_data/user';
import { ProfileIcon } from '../navbar/profileIcon';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export function ProfileHeader() {
  const pageParams = useSearchParams();
  const page = pageParams.get('page');

  return (
    <section className='card'>
      <div className='flex items-end px-20 gap-10 my-8'>
        <ProfileIcon userName={user.userName} img={user.img} size='120px' />
        <div className='pb-3'>
          <h1 className='mt-8 font-semibold text-3xl text-blue-900'>
            {user.userName}
          </h1>
          <p className='mt-1 text-gray-600'>{user.designation}</p>
        </div>
      </div>

      <hr />
      {/* profile sub links */}
      <div className='flex justify-center gap-5'>
        <Link
          href={`/profile/faisal/?page=about`}
          className={`py-3 px-3 border-y-2 border-t-transparent ${
            page === 'about' ? 'border-b-blue-500' : 'border-b-transparent'
          } hover:border-b-blue-500`}
        >
          About
        </Link>
        <Link
          href={`/profile/faisal/?page=questions`}
          className={`py-3 px-3 border-y-2 border-t-transparent ${
            page === 'questions' ? 'border-b-blue-500' : 'border-transparent'
          } hover:border-b-blue-500`}
        >
          Questions
        </Link>
        <Link
          href={`/profile/faisal/?page=answers`}
          className={`py-3 px-3 border-y-2 border-t-transparent ${
            page === 'answer' ? 'border-b-blue-500' : 'border-transparent'
          } hover:border-b-blue-500`}
        >
          Answers
        </Link>
        <Link
          href={`/profile/faisal/?page=shared`}
          className={`py-3 px-3 border-y-2 border-t-transparent ${
            page === 'shared' ? 'border-b-blue-500' : 'border-transparent'
          } hover:border-b-blue-500`}
        >
          Shared
        </Link>

        <Link
          href={`/profile/faisal/?page=followers`}
          className={`py-3 px-3 border-y-2 border-t-transparent ${
            page === 'followers' ? 'border-b-blue-500' : 'border-transparent'
          } hover:border-b-blue-500`}
        >
          Followers
        </Link>
        <Link
          href={`/profile/faisal/?page=following`}
          className={`py-3 px-3 border-y-2 border-t-transparent ${
            page === 'following' ? 'border-b-blue-500' : 'border-transparent'
          } hover:border-b-blue-500`}
        >
          Following
        </Link>
      </div>
    </section>
  );
}
