import { ReactNode } from "react";
import { Header } from "../components/Header";

type Props = {
  children: ReactNode;
};

export function DefaultLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
