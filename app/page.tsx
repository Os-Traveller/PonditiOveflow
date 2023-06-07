import { Question } from '@/components/home_page/question';
import { Feed } from '@/components/shared/feed/feed';
import { marginGenerator } from '@/components/shared/uiHelper';

export default function HomePage() {
  return (
    <section className='container'>
      <div className='mt-8 grid grid-cols-[220px_600px_1fr] gap-8'>
        <div></div>
        <section>
          <Question />
          {marginGenerator('my-8')}
          <Feed />
        </section>
        <section></section>
      </div>
    </section>
  );
}
