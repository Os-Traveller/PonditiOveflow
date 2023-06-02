import { Question } from '@/components/home_page/question';

export default function HomePage() {
  return (
    <section className='container'>
      <div className='mt-8 grid grid-cols-[220px_600px_1fr] gap-8'>
        <div></div>
        <div>
          <Question />
        </div>
        <div></div>
      </div>
    </section>
  );
}
