import { LuHome } from 'react-icons/lu';
import { FiEdit } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

export const links = [
  { url: '/', title: 'Home', icon: <LuHome size={25} /> },
  { url: '/answer', title: 'Answer', icon: <FiEdit size={25} /> },
  {
    url: '/profile',
    title: 'Profile',
    icon: <CgProfile size={25} />,
  },
];
