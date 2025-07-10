import type { ReactNode } from "react";
import "./Card.scss";

type CardProps = {
  children: ReactNode;
  childClassName: string;
};
export default function Card({ children, childClassName }: CardProps) {
  return <div className={`card ${childClassName}`}>{children}</div>;
}
