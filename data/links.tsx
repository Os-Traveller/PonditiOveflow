import { HiHome } from 'react-icons/hi';
import { FiEdit } from 'react-icons/fi';
import { BsPeopleFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

export const links = [
  { url: '/', title: 'Home', icon: <HiHome size={25} /> },
  { url: '/answer', title: 'Answer', icon: <FiEdit size={20} /> },
  { url: '/following', title: 'Following', icon: <BsPeopleFill size={20} /> },
  { url: '/profile', title: 'Profile', icon: <FaUserAlt size={18} /> },
];
