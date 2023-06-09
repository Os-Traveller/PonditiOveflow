import { useRouter } from 'next/navigation';
import { SiMusicbrainz } from 'react-icons/si';
import { Edu_NSW_ACT_Foundation } from 'next/font/google';

const font = Edu_NSW_ACT_Foundation({ subsets: ['latin'], weight: ['700'] });

export function Logo() {
  const router = useRouter();
  return (
    <div
      className='center-y gap-3 cursor-pointer'
      onClick={() => router.push('/')}
    >
      <SiMusicbrainz className='text-blue-600' size={30} />
      <h1 className={`${font.className} text-2xl text-blue-900`}>
        Ponditi-Overflow
      </h1>
    </div>
  );
}
