import Link from 'next/link';
import React from 'react';

interface SideBarLinkProps {
  title: string;
  url: string;
  icon: React.ReactNode;
  currentLink?: string;
  notification?: boolean;
}

export function SideBarLink(props: SideBarLinkProps) {
  const { url, title, icon, currentLink, notification } = props;
  return (
    <Link
      href={url}
      className='relative padding-x py-1 cursor-pointer hover:bg-gray-200 animation hover:animate-pulse'
    >
      <span
        className={`h-full absolute top-0 left-0 w-[5px] rounded-tr-md rounded-br-md ${
          currentLink === url ? 'bg-blue-600' : 'bg-transparent'
        }`}
      ></span>
      <span
        className={`center-y grid grid-cols-[40px_1fr] ${
          currentLink === url ? 'font-bold text-blue-600' : 'text-gray-500'
        }`}
      >
        {icon}
        <span className={`${notification ? 'center-y gap-2' : ''}`}>
          {title}
          {notification && (
            <span className='w-2 block h-2 rounded-full bg-red-500'>
              &nbsp;
            </span>
          )}
        </span>
      </span>
    </Link>
  );
}
