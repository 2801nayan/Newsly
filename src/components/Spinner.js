import React from "react";
import spinner from "../spinner.gif";

const Spinner = () => {
  return (
    <div className="text-center" style={{ margin: "-50px 0px 0px 0px" }}>
      <img className="my-3" src={spinner} alt="Loading Data..." />
      {/* <h2 className="text-black">Loading....</h2> */}
    </div>
  );
};

export default Spinner;