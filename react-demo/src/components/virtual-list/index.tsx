import React from "react";
import FixedSizeList from "./common-list.tsx";
import VariableSizeList from "./random-height-list.tsx";
import "./index.scss";

const Row = ({ index, style, forwardRef }) => {
  return (
    <div
      className={index % 2 ? "list-item-odd" : "list-item-even"}
      style={style}
      ref={forwardRef}
    >
      {`Row ${index}`}
    </div>
  );
};

const rowSizes = new Array(1000).fill(true).map(() => 25 + Math.round(Math.random() * 55))
const getItemSize = (index) => rowSizes[index];

const App = () => {
  return (
    <>
      <FixedSizeList
        className="list"
        height={200}
        width={200}
        itemSize={50}
        itemCount={1000}
      >
        {Row}
      </FixedSizeList>
      <h1>----------</h1>
      <VariableSizeList
        className="list"
        height={200}
        width={200}
        itemSize={getItemSize}
        itemCount={1000}
      >
        {Row}
      </VariableSizeList>
    </>
  );
};

export default App;
