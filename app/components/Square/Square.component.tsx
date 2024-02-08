import { MouseEventHandler } from "react";
import styles from "./Square.module.css";

export default function Square({
  value,
  onSquareClick,
}: {
  value: String | null;
  onSquareClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}
