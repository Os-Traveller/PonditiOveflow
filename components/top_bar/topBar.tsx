import { TopBarProfile } from './topBarProfile';
import { Logo } from './logo';
import { Search } from './search';

export function TopBar() {
  return (
    <nav className='grid grid-cols-3 items-center py-4 padding-x'>
      <Logo />
      <Search />
      <TopBarProfile className='ml-auto' userName='Faisal Ahmed' />
    </nav>
  );
}
