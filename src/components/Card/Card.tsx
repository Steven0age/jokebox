import type { ReactNode } from "react";
import "./Card.scss";

type CardProps = {
  children: ReactNode;
};
export default function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}
