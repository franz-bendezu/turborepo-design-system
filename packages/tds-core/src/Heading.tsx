export interface HeadingProps {
  children: React.ReactNode;
  clasName?: string;
}

export function Heading(props: HeadingProps) {
  return <h1 className={props.clasName}>{props.children}</h1>;
}

Heading.displayName = 'Heading';
