import styles from './TagChip.module.scss';

interface TagChipProps {
  tag: string;
  active?: boolean;
  onClick?: () => void;
}

export function TagChip({ tag, active = false, onClick }: TagChipProps) {
  const Component = onClick ? 'button' : 'span';
  const classes = [
    styles.chip,
    onClick ? styles.clickable : '',
    active ? styles.active : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      className={classes}
      onClick={onClick}
      type={onClick ? 'button' : undefined}
    >
      {tag}
    </Component>
  );
}
