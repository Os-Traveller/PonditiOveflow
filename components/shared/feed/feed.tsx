import { user } from '@/fake_data/user';
import { Card } from '../card';
import { FeedHeader } from './feedHeader';
import { FeedBody } from './feedBody';
import { feedInfo } from '@/fake_data/feedInfo';
import { FeedFooter } from './feedFooter';

export function Feed() {
  return (
    <Card className='pt-5'>
      {/* feed header */}
      <FeedHeader userImage={user.img} userName={user.userName} />
      <FeedBody
        question={feedInfo.question}
        answer={feedInfo.answer}
        tags={feedInfo.tags}
      />
      <hr />
      <FeedFooter />
    </Card>
  );
}
