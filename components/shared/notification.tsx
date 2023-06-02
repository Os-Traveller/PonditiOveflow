import { VscBell } from 'react-icons/vsc';

export function Notification() {
  return (
    <div className='relative'>
      <VscBell size={23} />
      <span className='absolute -top-3 left-3 w-5 h-5 rounded-full bg-blue-500 center-xy text-white text-xs'>
        9+
      </span>
    </div>
  );
}
