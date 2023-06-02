interface ProfileIconProps {
  userName?: string;
  img?: string;
  size?: string;
}

export function ProfileIcon(props: ProfileIconProps) {
  const { userName, img, size = '40px' } = props;

  let style;
  if (img) {
    style = { height: size, width: size, backgroundImage: `url(${img})` };
  } else {
    style = { height: size, width: size, backgroundColor: '#1C64F2' };
  }

  return (
    <div
      className='center-xy text-white text-xl rounded-full font-bold'
      style={{
        ...style,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {!img && userName?.[0]}
    </div>
  );
}
