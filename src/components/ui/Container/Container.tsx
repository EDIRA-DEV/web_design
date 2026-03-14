import styles from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {
  const classNames = [styles.container, className].filter(Boolean).join(' ');

  return <Tag className={classNames}>{children}</Tag>;
}
