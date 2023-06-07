import { TagBox } from './tagBox';

interface FeedBodyProps {
  question: string;
  answer: string;
  tags: { tagName: string; color: string }[];
}

export function FeedBody({ question, answer, tags }: FeedBodyProps) {
  return (
    <div className='px-5 pt-5 pb-3'>
      <h3 className='font-semibold mb-2'>{question}</h3>
      <p className='text-gray-800'>{answer}</p>
      <div className='flex gap-2 flex-wrap mt-3'>
        {tags.map((tag, index) => (
          <TagBox key={index} tagName={tag.tagName} color={tag.color} />
        ))}
      </div>
    </div>
  );
}
