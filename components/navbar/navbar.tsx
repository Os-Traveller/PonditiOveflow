import { NavProfile } from './navProfile';
import { Logo } from './logo';
import { Search } from './search';

export function Navbar() {
  return (
    <nav className='grid grid-cols-3 items-center py-4 padding-x'>
      <Logo />
      <Search />
      <NavProfile className='ml-auto' userName='Faisal Ahmed' />
    </nav>
  );
}
