export interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export function Button({ children, onClick, type, fullWidth }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        width: fullWidth ? '100%' : undefined,
      }}
    >
      {children}
    </button>
  );
}

Button.displayName = 'Button';
