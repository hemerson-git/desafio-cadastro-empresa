import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLInputElement> & {
  children: ReactNode;
};

export function Button({ children }: Props) {
  return <button>{children}</button>;
}
