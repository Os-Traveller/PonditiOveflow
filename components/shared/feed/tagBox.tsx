interface TagBoxProps {
  tagName: string;
  color: string;
}

export function TagBox({ tagName, color }: TagBoxProps) {
  return (
    <p
      style={{ backgroundColor: color }}
      className={`py-1 px-3 text-white rounded uppercase`}
    >
      # {tagName}
    </p>
  );
}
