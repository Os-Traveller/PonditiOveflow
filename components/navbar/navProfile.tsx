import Image from 'next/image';
import { FaUser } from 'react-icons/fa';

interface NavProfile {
  className?: string;
  img?: string;
  userName?: string;
}

export function NavProfile({ className, userName, img }: NavProfile) {
  return (
    <div className={`w-fit center-y gap-3 ${className}`}>
      <h2 className='text-lg font-bold text-gray-700'>{userName}</h2>
      <div className={`p-2 rounded-lg bg-blue-300`}>
        {img ? (
          <Image src={img} alt='profile-image' width={100} height={100} />
        ) : (
          <FaUser size={25} />
        )}
      </div>
    </div>
  );
}
