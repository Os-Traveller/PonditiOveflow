'use client';

import AboutUser from '@/components/profile_page/aboutUser';
import { AnswerProfile } from '@/components/profile_page/answerProfile';
import Followers from '@/components/profile_page/followers';
import Following from '@/components/profile_page/following';
import { ProfileHeader } from '@/components/profile_page/profileHeader';
import QuestionProfile from '@/components/profile_page/questionProfile';
import { Shared } from '@/components/profile_page/shared';
import { useSearchParams } from 'next/navigation';

interface ProfileProps {
  params: {
    userId: String;
  };
}

export default function Profile({ params }: ProfileProps) {
  const { userId } = params;
  const pageParams = useSearchParams();
  const page = pageParams.get('page');

  return (
    <section className='mx-auto w-[700px] mt-8'>
      <ProfileHeader />
      <div className='mt-8'></div>
      {page === 'about' && <AboutUser />}
      {page === 'questions' && <QuestionProfile />}
      {page === 'answers' && <AnswerProfile />}
      {page === 'shared' && <Shared />}
      {page === 'followers' && <Followers />}
      {page === 'following' && <Following />}
    </section>
  );
}
