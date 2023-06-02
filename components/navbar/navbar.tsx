'use client';
import { links } from '@/data/links';
import { Logo } from './logo';
import { NavLink } from './navLink';
import { usePathname } from 'next/navigation';
import { user } from '@/fake_data/user';
import { ProfileIcon } from './profileIcon';
import { Notification } from '../shared/notification';
import { Search } from './search';

export function Navbar() {
  const currentPath = usePathname();

  return (
    <nav className='px-5 shadow-md bg-white'>
      <div className='container center-y justify-between'>
        <Logo />
        <div className='center-y gap-5'>
          {links.map((link, index) => (
            <NavLink
              key={index}
              url={link.url}
              icon={link.icon}
              currentLink={currentPath}
            />
          ))}
        </div>
        <div className='center-y gap-5'>
          <Search />
          <Notification />
          <ProfileIcon userName={user.userName} img={user.img} />
        </div>
      </div>
    </nav>
  );
}
