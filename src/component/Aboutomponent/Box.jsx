import React from "react";

const Box = ({ no }) => {
  return (
    <div className="flex animate-move">
      {(() => {
        let td = [];
        for (let i = 1; i <= no; i++) {
          td.push(<div className=" h-2 w-2 bg-[#DD00FF] dark:bg-[#00FF62] m-[2px]" key={i}></div>);
        }
        return td;
      })()}
    </div>
  );
};

export default Box;