import { ButtonHTMLAttributes } from "react";

export type TButtonProps = {
	neo?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ ...props }: TButtonProps) => {
  return <button {...props} style={{ background: "green", borderRadius: "6px", cursor: "pointer" }} />
}
