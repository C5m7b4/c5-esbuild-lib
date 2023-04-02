export type NormalButtonType =
  | "normal"
  | "green"
  | "purple"
  | "danger"
  | "info"
  | "success"
  | "error";

export type NormalButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  label: string;
  style?: React.CSSProperties;
  onClick?: () => React.MouseEvent<HTMLButtonElement>;
  disabled?: boolean;
  type?: NormalButtonType;
  size?: NormalButtonSize;
}
