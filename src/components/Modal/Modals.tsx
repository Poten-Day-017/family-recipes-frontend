import React, { useState } from "react";

const Modals = () => {
  const [modals] = useState([]);
  return (
    <div>{modals.map(({ component }) => React.createElement(component))}</div>
  );
};

export default Modals;
