import { QuestionBox } from '@/components/question_page/questionBox';
import { horizontalLine } from '@/components/shared/uiHelper';

export default function QuestionPage() {
  return (
    <section className='w-[600px] mt-8 mx-auto card py-5'>
      <h1 className='text-2xl text-center text-blue-900 font-bold'>
        Question For You
      </h1>
      {horizontalLine('h-[1px] block bg-blue-200 mt-5')}
      <QuestionBox />
    </section>
  );
}
