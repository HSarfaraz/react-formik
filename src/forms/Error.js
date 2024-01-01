import React from "react";

const Error = (props) => {
  return (
    <div
      style={{ color: "red", marginTop: "0.25rem", marginBottom: "0.25rem" }}
    >
      {props.children}
    </div>
  );
};

export default Error;
