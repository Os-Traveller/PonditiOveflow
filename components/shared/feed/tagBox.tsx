interface TagBoxProps {
  tagName: string;
  color: string;
}

export function TagBox({ tagName, color }: TagBoxProps) {
  return (
    <p
      style={{ backgroundColor: color }}
      className={`py-[1px] px-2 text-white rounded uppercase text-xs cursor-pointer`}
    >
      # {tagName}
    </p>
  );
}
