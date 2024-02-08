import Image from "next/image";
import styles from "./page.module.css";
import Square from "./components/Square.component";

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}
