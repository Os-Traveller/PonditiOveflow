import Link from 'next/link';
import React from 'react';

interface NavLinkProps {
  url: string;
  icon: React.ReactNode;
  currentLink: string;
}

export function NavLink({ url, icon, currentLink }: NavLinkProps) {
  return (
    <Link
      className={`py-3 px-5 border-b-[3px] ${
        url === currentLink
          ? 'border-blue-600 text-blue-600'
          : 'border-transparent text-blue-900'
      }`}
      href={url}
    >
      {icon}
    </Link>
  );
}
