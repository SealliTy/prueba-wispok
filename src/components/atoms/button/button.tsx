import './button.css';

type TButtonType = "submit" | "reset" | "button" | undefined

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  type?: TButtonType;
  className?: string;
}

export const Button = ({ type = "button", onClick, children, className }: IButton) => {
  return (
    <button type={type} onClick={onClick} className={`button_atomic ${className}`}>{children}</button>
  )
}