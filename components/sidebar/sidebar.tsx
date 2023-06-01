'use client';

import { links } from '@/data/links';
import { SideBarLink } from './sidebarLink';
import { usePathname } from 'next/navigation';
import { TbBellFilled } from 'react-icons/tb';
import { CgLogOut } from 'react-icons/cg';

export function Sidebar() {
  const path = usePathname();
  return (
    <section className='h-full py-5 flex flex-col justify-between'>
      <div className='flex flex-col gap-3'>
        {links.map((link, index) => (
          <SideBarLink
            key={index}
            title={link.title}
            url={link.url}
            icon={link.icon}
            currentLink={path}
          />
        ))}
        <SideBarLink
          title='Notification'
          url='/notification'
          icon={<TbBellFilled size={20} />}
          currentLink={path}
          notification
        />
      </div>
      <div>
        <hr />
        <button className='mt-5 py-3 px-5 bg-red-500 rounded-lg text-white min-w-[50%] mx-auto font-bold animation hover:bg-red-700 center-y justify-center gap-3'>
          <CgLogOut size={20} />
          Logout
        </button>
      </div>
    </section>
  );
}
