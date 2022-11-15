import React from "react";

const Error = ({ err }) => {
  return (
    <div className="text-center p-3 bg-red-500 font-bold text-white rounded-sm my-4 uppercase">
      {err}
    </div>
  );
};

export default Error;
