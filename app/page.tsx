import Square from "./components/Square/Square.component";

export default function Board() {
  return (
    <>
      <div className="board-row">
        {[1, 2, 3].map((value) => (
          <Square key={value} value={value.toString()} />
        ))}
      </div>
      <div className="board-row">
        {[4, 5, 6].map((value) => (
          <Square key={value} value={value.toString()} />
        ))}
      </div>
      <div className="board-row">
        {[7, 8, 9].map((value) => (
          <Square key={value} value={value.toString()} />
        ))}
      </div>
    </>
  );
}
