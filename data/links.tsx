import { LuHome } from 'react-icons/lu';
import { FiEdit } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

export const links = [
  { url: '/', title: 'Home', icon: <LuHome size={25} /> },
  { url: '/questions', title: 'Questions', icon: <FiEdit size={25} /> },
  {
    url: '/profile/faisal/?page=about',
    title: 'Profile',
    icon: <CgProfile size={25} />,
  },
];
